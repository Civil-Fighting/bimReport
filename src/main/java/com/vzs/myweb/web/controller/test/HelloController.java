package com.vzs.myweb.web.controller.test;

import com.google.common.collect.Lists;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

/**
 * Created by byao on 30/07/2017.
 */
@Controller
@RequestMapping("/3d")
public class HelloController {

    @ResponseBody
    @RequestMapping("/json")
    public String hello() {
        return "Hello: Ben";
    }

    @RequestMapping("/hbs")
    public ModelAndView helloHbs() {
        return new ModelAndView("/hello");
    }

    @RequestMapping("/index")
    public ModelAndView index() {
        return new ModelAndView("3d/youngGardenIndex");
    }

    @RequestMapping("/topleft")
    public ModelAndView topLeft() {
        return new ModelAndView("3d/chartTopLeft");
    }

    @RequestMapping("/topRight")
    public ModelAndView topRight() {
        return new ModelAndView("3d/chartTopRight");
    }

    @RequestMapping("/bottomRight")
    public ModelAndView bottomRight() {
        return new ModelAndView("3d/chartBottomRight");
    }


    @RequestMapping("/youngGarden")
    public ModelAndView findYoungGardenFor3D() {
        ModelAndView modelAndView = new ModelAndView("3d/youngGarden");
        return modelAndView;
    }

    @RequestMapping("/mock")
    @ResponseBody
    public PageInfo findPageInfo() {
        PageInfo pi = new PageInfo();
        List<MockWind> mockWindList = Lists.newArrayList();
        for (int i = 0 ; i< 100 ;i++) {
            mockWindList.add(mock(i));
        }

        pi.setRows(mockWindList);
        return pi;
    }

    private MockWind mock(int i) {
        Random randomGenerator = new Random();
        int seed = 99;
        MockWind mockWind = new MockWind();
        mockWind.setWind10(i + "");
        mockWind.setWind11(randomGenerator.nextInt(seed) + "");
        mockWind.setWind20(i + "");
        mockWind.setWind21(randomGenerator.nextInt(seed) + "");
        mockWind.setWind30(i + "");
        mockWind.setWind31(randomGenerator.nextInt(seed) + "");
        mockWind.setWind40(i + "");
        mockWind.setWind41(randomGenerator.nextInt(seed) + "");
        return  mockWind;
    }



    @RequestMapping("/mock/dbd")
    @ResponseBody
    public List<DateValueVo> finddbdData() {
        Random randomGenerator = new Random();
        List<DateValueVo> dateValueVos = Lists.newArrayList();
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0 ; i< 100 ;i++) {
            cal.add(Calendar.DAY_OF_MONTH, 1);
            DateValueVo dateValueVo = new DateValueVo();
            dateValueVo.setDate(simpleDateFormat.format(cal.getTime()));
            dateValueVo.setValue(randomGenerator.nextInt(100) + "");
            dateValueVos.add(dateValueVo);

        }
        return dateValueVos;
    }

    @RequestMapping("/mock/stc")
    @ResponseBody
    public List<YearValueVo> findStcData() {
        Random randomGenerator = new Random();
        Calendar cal = Calendar.getInstance();
        List<YearValueVo> dateValueVos = Lists.newArrayList();
        for (int i = 0 ; i<100; i++) {
            cal.add(Calendar.YEAR, 1);
            YearValueVo yearValueVo = new YearValueVo();
            yearValueVo.setYear(cal.get(Calendar.YEAR) + "");
            yearValueVo.setValue(randomGenerator.nextInt(100) + "");
            dateValueVos.add(yearValueVo);
        }
        return dateValueVos;
    }

}
