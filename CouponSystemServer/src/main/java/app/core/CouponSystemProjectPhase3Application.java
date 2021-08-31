package app.core;

import app.core.filters.LoginFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class CouponSystemProjectPhase3Application {

	public static void main(String[] args) {
		SpringApplication.run(CouponSystemProjectPhase3Application.class, args);

		System.out.println("===============================================================================");

		System.out.println("===============================================================================");

	}
}
