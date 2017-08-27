package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

/**
 * Created by byao on 5/2/15.
 */
public class AndWhenOperator extends WhenOperatorBooleanSupport implements WhenOperator {
    @Override
    public boolean operate(Object left, Object right) {
        checkBoolean(left, right);
        return ((Boolean) left) && ((Boolean) right);
    }
}
