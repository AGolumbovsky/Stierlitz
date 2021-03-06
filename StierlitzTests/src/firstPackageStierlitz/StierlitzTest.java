package firstPackageStierlitz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class StierlitzTest {
	
	Thread t;
	WebDriver driver;
	
	@Before
	public void startup() {
		driver = new FirefoxDriver();
		driver.get("localhost:8777");
		driver.manage().window().maximize();
	}
	
	@Test
	public void mainTest() {
		
		String testText = "This is the first line of the text"
				+ "This is the second line extraordinary"
				+ "the third line is also here"
				+ "and how about the fourth one just for fun"
				+ "five"
				+ "six -ish";
		
		WebElement qqq = driver.findElement(By.id("text-original"));
		qqq.sendKeys(testText);
		
		WebElement butt = driver.findElement(By.id("buttEncode"));
		butt.click();
	}
	
	@After
	public void teardown() {
		
		// make the mofo sleep for 10 sec
		try {
			t.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// close the window as soon as it wakes up
		driver.close();
	}

}
