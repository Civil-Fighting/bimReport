package com.vzs.myweb.configuration;

import com.vzs.myweb.configuration.auth.VzsAuth;
import com.vzs.myweb.configuration.auth.VzsAuthInterceptorManger;
import com.vzs.myweb.configuration.handlebar.VzsEnableHandlebar;
import com.vzs.myweb.web.Webs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * Created by byao on 29/07/2017.
 */
@Configuration
//@EnableAspectJAutoProxy
@VzsEnableHandlebar
//@VzsEnableKafka
@ComponentScan(basePackageClasses = { Webs.class, VzsAuth.class})
public class ServletApplicationContext extends WebMvcConfigurationSupport {
    @Autowired
    VzsAuthInterceptorManger vzsAuthInterceptorManger;

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        this.addStaticResourceHandler(registry);
        super.addResourceHandlers(registry);
    }

    private void addStaticResourceHandler(ResourceHandlerRegistry registry) {
        String resourcePath = "/resources/**";
        ResourceHandlerRegistration resourceHandlerRegistration = registry.addResourceHandler(new String[]{resourcePath});
        resourceHandlerRegistration.addResourceLocations(new String[]{"/WEB-INF/resources/"});
        resourceHandlerRegistration.setCachePeriod(Integer.valueOf(0));
    }

    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        loadAuthenticationChain(registry);
    }

    protected void loadAuthenticationChain(InterceptorRegistry registry) {
        this.vzsAuthInterceptorManger.register(registry);
    }
}
