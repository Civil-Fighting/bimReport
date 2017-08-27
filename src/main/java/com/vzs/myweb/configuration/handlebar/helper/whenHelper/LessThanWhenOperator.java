package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

/**
 * Created by byao on 5/2/15.
 */
public class LessThanWhenOperator implements WhenOperator {
    @SuppressWarnings("unchecked")
    @Override
    public boolean operate(Object left, Object right) {
        Comparable leftOperand = (Comparable) left;
        Comparable rightOperand = (Comparable) right;
        return leftOperand.compareTo(rightOperand) < 0;
    }
}
