package com.vzs.myweb.util;

import com.google.common.base.Predicate;
import com.google.common.collect.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by byao on 5/2/15.
 */
public class VzsCollectionUtils extends org.springframework.util.CollectionUtils {

    public static boolean isNotEmpty(Collection<?> collection) {
        return !isEmpty(collection);
    }

    public static <E> List<E> sublist(List<E> originalList, int fromIndex, int toIndex) {
        return new ArrayList<E>(originalList.subList(fromIndex, toIndex));
    }

    public static <E> List<E> sublist(List<E> originalList, int fromIndex) {
        return new ArrayList<E>(originalList.subList(fromIndex, originalList.size()));
    }


    public static List<Long> rangeLong(long lower, long upper) {
        return Lists.newArrayList(ContiguousSet.create(Range.closed(lower, upper), DiscreteDomain.longs()));
    }

    public static List<Integer> rangeInt(int lower, int upper) {
        return Lists.newArrayList(ContiguousSet.create(Range.closed(lower, upper), DiscreteDomain.integers()));
    }

    public static <E> E filterSingle(Collection<E> collection, Predicate<E> predicate) {
        //        Collection<E> filtered = Collections2.filter(collection, predicate);

        //        return filtered.iterator().next();

        List<E> filtered = FluentIterable.from(collection).filter(predicate).toList();

        if (filtered.size() == 0) {
            return null;
        }

        if (filtered.size() == 1) {
            return filtered.get(0);
        }
        throw new IllegalStateException("The collection size is " + filtered.size() + " whose size is more than 1");
    }

    public static <T> List<List<T>> partition(List<T> list, int size) {
        return Lists.partition(list, size);
    }

    public static <E> E findLast(List<E> list) {
        if (isEmpty(list)) {
            return null;
        }
        int lastIndex = list.size() - 1;
        return list.get(lastIndex);
    }
}
