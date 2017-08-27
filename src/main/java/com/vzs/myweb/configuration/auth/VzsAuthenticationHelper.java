package com.vzs.myweb.configuration.auth;

import com.google.common.base.Optional;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;

@Slf4j
@Component
public class VzsAuthenticationHelper {
    private final Cache<Method, Optional<NotRequiredLogin>> notRequiredLoginCache = CacheBuilder.newBuilder().maximumSize(10000).build();
    private final Cache<Method, Optional<Role>> roleCache = CacheBuilder.newBuilder().maximumSize(10000).build();


    public Optional<NotRequiredLogin> getLogin(final Method method) {
        try {
            return notRequiredLoginCache.get(method, new Callable<Optional<NotRequiredLogin>>() {
                @Override public Optional<NotRequiredLogin> call() throws Exception {
                    NotRequiredLogin loginNotRequired = VzsAnnotationUtils.findAnnotationsFromMethodAndClass(method, NotRequiredLogin.class);
                    return Optional.fromNullable(loginNotRequired);
                }
            });
        } catch (ExecutionException e) {
            throw new IllegalStateException(e.getMessage(), e);
        }
    }


    public Optional<Role> getRole(final Method method) {
        try {
            return roleCache.get(method, new Callable<Optional<Role>>() {
                @Override public Optional<Role> call() throws Exception {
                    Role role = VzsAnnotationUtils.findAnnotationsFromMethodAndClass(method, Role.class);
                    return Optional.fromNullable(role);
                }
            });
        } catch (ExecutionException e) {
            throw new IllegalStateException(e.getMessage(), e);
        }
    }
}
