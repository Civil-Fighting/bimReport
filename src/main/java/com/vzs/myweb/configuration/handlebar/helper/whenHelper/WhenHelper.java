package com.vzs.myweb.configuration.handlebar.helper.whenHelper;

import com.github.jknack.handlebars.Handlebars;
import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by byao on 5/2/15.
 */
public class WhenHelper implements Helper<Object> {
    public static final String HELPER_NAME = "when";

    public static final Object UNKNOWN_PARAM = new Object();

    private Map<String, WhenOperator> operators = new HashMap<>();

    void addOperator(String name, WhenOperator operator) {
        operators.put(name, operator);
    }

    @Override
    public CharSequence apply(Object context, Options options) throws IOException {
        Object leftOperand = context;
        Object operatorParam = options.param(0, UNKNOWN_PARAM);
        Object rightOperand = options.param(1, UNKNOWN_PARAM);

        if (operatorParam == UNKNOWN_PARAM || rightOperand == UNKNOWN_PARAM) { // NOSONAR  의도적으로 == 비교한 것임.
            throw new IllegalArgumentException("#" + HELPER_NAME + " must have [leftOperand operator rightOperand] parameters.");
        }

        WhenOperator operator = operators.get(operatorParam);
        if (operator == null) {
            throw new IllegalArgumentException(operatorParam + " is unknown operator.");
        }

        if (operator.operate(leftOperand, rightOperand)) {
            return options.fn();
        }

        return options.inverse();
    }

    public static void register(final Handlebars handlebars) {
        WhenHelper whenHelper = new WhenHelper();
        whenHelper.addOperator("equals", new EqualsWhenOperator());
        whenHelper.addOperator("equalsAsString", new EqualsAsStringWhenOperator());
        whenHelper.addOperator("lessThan", new LessThanWhenOperator());
        whenHelper.addOperator("lessThanOrEquals", new LessThanOrEqualsWhenOperator());
        whenHelper.addOperator("greaterThan", new GreaterThanWhenOperator());
        whenHelper.addOperator("greaterThanOrEquals", new GreaterThanOrEqualsWhenOperator());
        whenHelper.addOperator("and", new AndWhenOperator());
        whenHelper.addOperator("or", new OrWhenOperator());

        handlebars.registerHelper(HELPER_NAME, whenHelper);
    }
}