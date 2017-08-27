package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

/**
 * Created by byao on 5/2/15.
 */
public class WhenOperatorBooleanSupport {

    protected static void checkBoolean(Object left, Object right) {
        if (!(left instanceof Boolean)) {
            throw new IllegalArgumentException("Left operand must be boolean. left : " + left);
        }

        if (!(right instanceof Boolean)) {
            throw new IllegalArgumentException("Right operand must be boolean. right : " + right);
        }
    }
}
