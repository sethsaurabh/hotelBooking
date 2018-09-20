package stepDefinitions;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(

        features = "src/Features",
        plugin = { "pretty", "html:target/cucumber-reports" }

)

public class RunCukeTest {
}
