package com.vzs.myweb.configuration.auth;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class VzsRequestUserInterceptor extends HandlerInterceptorAdapter {
    @Autowired
    VzsUserFactory vzsUserFactory;
    @Autowired
    UserRequestHolder userRequestHolder;

    public VzsRequestUserInterceptor() {
    }

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        this.setUser(request, response);
        return true;
    }

    private void setUser(HttpServletRequest request, HttpServletResponse response) {
        User user = this.vzsUserFactory.getUser(request, response);
        this.userRequestHolder.setUser(user);
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null) {
            ModelMap modelMap = modelAndView.getModelMap();
            if (!modelMap.containsKey(VzsNameTypes.USER.name())) {
                modelMap.addAttribute(VzsNameTypes.USER.name(), this.userRequestHolder.getUser());
            }
        }

    }
}
