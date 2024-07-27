package com.RifaPruebaTecnica.PruebaTecnica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

//import springfox.documentation.oas.annotations.EnableOpenApi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Configuration
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.RifaPruebaTecnica")
@EntityScan(basePackages = "com.RifaPruebaTecnica.Model")
@EnableAutoConfiguration
@ComponentScan("com.RifaPruebaTecnica")
public class PruebaTecnicaRifaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PruebaTecnicaRifaApplication.class, args);
	}

}
