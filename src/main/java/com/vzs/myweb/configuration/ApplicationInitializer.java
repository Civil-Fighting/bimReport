package com.vzs.myweb.configuration;

import org.springframework.util.Assert;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

/**
 * Created by byao on 29/07/2017.
 */
public class ApplicationInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        addDispatcherServlet(servletContext, "webServlet", ServletApplicationContext.class, "/");
    }

    protected ServletRegistration.Dynamic addDispatcherServlet(ServletContext servletContext, String servletName, Class<?> servletContextConfigClass, String... mappings) {
        return this.addDispatcherServlet(servletContext, servletName, new Class[]{servletContextConfigClass}, mappings);
    }

    protected ServletRegistration.Dynamic addDispatcherServlet(ServletContext servletContext, String servletName, Class<?>[] servletContextConfigClasses, String... mappings) {
        Assert.notNull(servletName, "servletName can't be null.");
        Assert.notEmpty(servletContextConfigClasses, "Servlet context config class can't be null.");
        Assert.notEmpty(mappings, "Servlet mapping can't be empty.");
        AnnotationConfigWebApplicationContext servletApplicationContext = new AnnotationConfigWebApplicationContext();
        servletApplicationContext.register(servletContextConfigClasses);
        ServletRegistration.Dynamic dispatcherServlet = servletContext.addServlet(servletName, new DispatcherServlet(servletApplicationContext));
        dispatcherServlet.setLoadOnStartup(1);
        dispatcherServlet.addMapping(mappings);
        return dispatcherServlet;
    }
}
