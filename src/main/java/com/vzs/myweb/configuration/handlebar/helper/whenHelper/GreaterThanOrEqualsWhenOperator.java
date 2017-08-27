package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

/**
 * Created by byao on 5/2/15.
 */
public class GreaterThanOrEqualsWhenOperator extends GreaterThanWhenOperator {
    @Override
    public boolean operate(Object left, Object right) {
        if (left.equals(right)) {
            return true;
        }
        return super.operate(left, right);
    }
}
