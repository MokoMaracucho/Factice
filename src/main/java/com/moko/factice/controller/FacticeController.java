package com.moko.factice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FacticeController {

	@RequestMapping("/factice")
	public String factice() {
		return "factice";
	}
}