package com.vzs.myweb.util;

import org.springframework.core.annotation.AnnotationUtils;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

/**
 * Created by byao on 5/20/15.
 */
public class VzsAnnotationUtils extends AnnotationUtils {

	public static <A extends Annotation> A findAnnotationsFromMethodAndClass(Method method, Class<A> annotationType) {
		if (method == null) {
			return null;
		}

		if (annotationType == null) {
			return null;
		}

		A annotation = findAnnotation(method, annotationType);
		if (annotation != null) {
			return annotation;
		}
		return findAnnotation(method.getDeclaringClass(), annotationType);
	}
}
