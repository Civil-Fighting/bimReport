package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

/**
 * Created by byao on 5/2/15.
 */
public class EqualsAsStringWhenOperator implements WhenOperator {
    @Override
    public boolean operate(Object left, Object right) {
        return String.valueOf(left).equals(String.valueOf(right));
    }
}
