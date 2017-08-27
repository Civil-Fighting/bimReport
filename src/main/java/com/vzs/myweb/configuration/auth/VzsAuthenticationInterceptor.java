package com.vzs.myweb.configuration.auth;

import com.google.common.base.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class VzsAuthenticationInterceptor extends HandlerInterceptorAdapter {
    @Autowired
    VzsAuthenticationHelper vzsAuthenticationHelper;
    @Autowired
    LoginHelper loginHelper;
    @Autowired
    private UserRequestHolder requestHolder;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if(!(handler instanceof HandlerMethod)) {
            return true;
        } else {
            HandlerMethod handlerMethod = (HandlerMethod)handler;
            Optional<NotRequiredLogin> loginNotRequired = vzsAuthenticationHelper.getLogin(handlerMethod.getMethod());
            User user = this.requestHolder.getUser();
            Optional role = vzsAuthenticationHelper.getRole(handlerMethod.getMethod());
            checkAllowIp(request);
            if(this.isLoginRequired((NotRequiredLogin)loginNotRequired.orNull(), (Role)role.orNull(), user)) {
                response.sendRedirect(this.loginHelper.getUrl(request));
                return false;
            } else {
                checkRole((Role)role.orNull(), user);
                return true;
            }

        }
    }
    private void checkAllowIp(HttpServletRequest request) {

    }

    protected void checkRole(Role role, User user) {
        if(role != null && role.value() != null) {
            if(CollectionUtils.isEmpty(user.getRoleIds())) {
                throw new AuthenticationException("no authority user");
            } else {
                String[] arr$ = role.value();
                int len$ = arr$.length;

                for(int i$ = 0; i$ < len$; ++i$) {
                    String menuId = arr$[i$];
                    if(user.getRoleIds().contains(menuId)) {
                        return;
                    }
                }

                throw new AuthenticationException("no authority user");
            }
        }
    }

    private boolean isRoleRequired(Role role, User user) {
        if(role != null) {
            return !user.isLogin();
        }
        return false;
    }

    private boolean isLoginRequired(NotRequiredLogin loginNotRequired, Role role, User user) throws IOException {
        if (isRoleRequired(role, user) && loginNotRequired == null) {
            return true;
        }
        return false;
    }
}
