package com.vzs.myweb.web.controller.test;

import com.vzs.myweb.configuration.auth.MainPageInterceptor;
import com.vzs.myweb.configuration.auth.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Controller
public class MainPageController {
    @RequestMapping("/")
    public ModelAndView mainPage(ModelAndView mav) {
        mav.setViewName("main/main");
        return mav;
    }


    @RequestMapping("/register")
    public ModelAndView register(User user, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView("user/register");
        mav.addObject("user", user);
        return mav;
    }

    @RequestMapping("/myCenter")
//    @CustomInterceptors(value = { MainPageInterceptor.class })
    public ModelAndView myCenter(User user) {

        if (user != null && user.getAccountType() == 1) {
            return new ModelAndView(new RedirectView("/company/view/company"));
        } else {
            return new ModelAndView(new RedirectView("/person/view/person"));
        }

    }
}
