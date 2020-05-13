package math.utils;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assumptions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;
import org.junit.jupiter.api.function.Executable;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.RepetitionInfo;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;


//@TestInstance(TestInstance.Lifecycle.PER_METHOD)
//per method default beahviour
@DisplayName("When Running MathUtils")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MathUtilsTest {
    MathUtils mu;
    TestInfo testInfo;
    TestReporter testReporter;
    //incase of per class static is not requied as thee is only one isntance
    @BeforeAll
    static void initBeforeAll(){
       System.out.println("Before All");
    }
    @BeforeEach
    void init(TestInfo TestInfo,TestReporter testReporter){
        this.testInfo=testInfo;
        this.testReporter=testReporter;
        System.out.println("Before Each");
        mu=new MathUtils();
    }

    @AfterAll
    static void afterBeforeAll(){
        System.out.println("After All");
    }
    @AfterEach
    void tearDown(){
       System.out.println("Cleanup");
    }

    @Test
    @DisplayName("Testing add two numbers")
    @EnabledOnOs((OS.WINDOWS))
    //@EnabledOnOs((OS.LINUX))
    void testAdd() {

        int expected=2;
        int actual=mu.add(-1,3);
        assertEquals(expected,actual,"The add method should add two numbers");
        assertAll(
                ()->assertEquals(5,mu.add(2,3)),
                ()->assertEquals(1,mu.add(-2,3))
        );
        testReporter.publishEntry("Running....");
    }

    @Nested
    @DisplayName("multiply method")
    @Tag("Math")
    class MultiplyTest{
        @Test
        @DisplayName("when multiply two positive numbers")
        void testMultiplyPositive(){
           System.out.println("Test info:"+testInfo.getDisplayName()+":"+testInfo.getTags());
           assertEquals(6,mu.multiply(2,3),"Shoud return the right product");
        }
        @Test
        @DisplayName("when multiply two negative numbers")
        void testMultiplyNegative(){
            //supplier callback func
            assertEquals(-6,mu.multiply(-2,3),()->"Shoud return the right product");
        }
    }

    @Test
    void testDevide(){
        //Executable executable=()->mu.devide(1,0);
        //assertThrows(ArithmeticException.class,executable,"devide by zero should throw exception");
       // assertThrows(NullPointerException.class,()->mu.devide(1,0),"devide by zero should throw exception");
        assertThrows(ArithmeticException.class,()->mu.devide(1,0),"devide by zero should throw exception");

    }

    @RepeatedTest(3)
    @Tag("Circle")
    void testComputeCircleArea(RepetitionInfo repInfo) {
        //repInfo.getCurrentRepetition()
        //repInfo.getTotalRepetitions()
        //assumeTrue(true); //example to chec kserver is up or down
        boolean isServiceUp=true;
        assumeTrue(isServiceUp);
        assertEquals(314.1592653589793,mu.computeCircleArea(10),"Shoud return right circle area");
    }
    @Test
    @Disabled
    @DisplayName("This is TDD method that should not run")
    void testTDD(){
        fail("failed as not yer implemented");
    }

}