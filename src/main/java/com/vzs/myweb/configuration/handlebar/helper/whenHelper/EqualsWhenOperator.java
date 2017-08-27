package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

/**
 * Created by byao on 5/2/15.
 */
public class EqualsWhenOperator implements WhenOperator {
    @Override
    public boolean operate(Object left, Object right) {
        return left.equals(right);
    }
}
