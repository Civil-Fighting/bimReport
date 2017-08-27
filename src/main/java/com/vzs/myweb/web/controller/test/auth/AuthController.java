package com.vzs.myweb.web.controller.test.auth;

import com.vzs.myweb.configuration.auth.UserRequestHolder;
import com.vzs.myweb.configuration.auth.VzsUserFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    AuthProvider authProvider;
    @Autowired
    VzsUserFactory vzsUserFactory;
    @Autowired
    UserRequestHolder userRequestHolder;

    @RequestMapping("/loginRequest")
    public ModelAndView loginRequest(@RequestParam(value = "rtnUrl", required = false) String rtnUrl) {
        ModelAndView modelAndView = new ModelAndView("auth/sign/signin");
        modelAndView.addObject("rtnUrl", rtnUrl);
        return modelAndView;
    }


    @RequestMapping("/loginAction")
    public ModelAndView loginAction(ModelAndView modelAndView, HttpServletRequest request, HttpServletResponse response,
                                    @RequestParam String userName, @RequestParam String password, @RequestParam(required = false) String verifyCode,
                                    @RequestParam(value = "rtnUrl", required = false) String rtnUrl, @RequestParam(required = false,
            defaultValue="false") Boolean isRememberLogin) {
        ModelAndView mav = new ModelAndView("auth/sign/signin");
        mav.addObject("rtnUrl", rtnUrl);

//        VerifyImageDto verifyImageDto = (VerifyImageDto)request.getSession().getAttribute("currentToken");
//
//        if (!verifyImageDto.getToken().equalsIgnoreCase(verifyCode)) {
//            mav.addObject("error", "Error verify code");
//            mav.addObject("alertFlag","Y");
//            return mav;
//        }
        boolean isAuthSucessfully = authProvider.authUser(request, response, userName, password, isRememberLogin);
        if (isAuthSucessfully == false) {
            mav.addObject("error", "error password");
            mav.addObject("alertFlag","Y");
            return mav;
        } else {
//            if (vzsUserFactory.getUser(request, response) != null && vzsUserFactory.getUser(request, response).getVerifiedLevel() == 0) {
//                return new ModelAndView(new RedirectView("/myCenter"));
//            }
        }

        return new ModelAndView(new RedirectView(rtnUrl));
    }

    @RequestMapping("/logout")
    public ModelAndView logout(HttpServletRequest request, HttpServletResponse response) {
        vzsUserFactory.removeUser(request, response);
        return new ModelAndView(new RedirectView("/"));
    }
}
