let value = 0;



function normalCDF(X) {   //HASTINGS.  MAX ERROR = .000001
    var T = 1 / (1 + .2316419 * Math.abs(X));
    var D = .3989423 * Math.exp(-X * X / 2);
    var Prob = D * T * (.3193815 + T * (-.3565638 + T * (1.781478 + T * (-1.821256 + T * 1.330274))));
    if (X > 0) {
        Prob = 1 - Prob
    }
    return Prob
}

window.onload = function () {

    document.getElementById("numberOfViewsForA").value = 10;
    document.getElementById("numberOfViewsForB").value = 10;
    document.getElementById("numberOfConvertedForA").value = 5;
    document.getElementById("numberOfConvertedForB").value = 8;

    let numberOfViewsForA = 10;
    let numberOfViewsForB = 10;
    let numberOfConvertedForA = 5;
    let numberOfConvertedForB = 8;

    let resultA = (numberOfConvertedForA / numberOfViewsForA) * 100;
    let resultB = (numberOfConvertedForB / numberOfViewsForB) * 100;
    if (resultA > resultB) {
        document.getElementById("firstAdd").classList.add("color");
        document.getElementById("resultFirstAdd").classList.add("color");
        document.getElementById("numberOfViewsForA").classList.add("color");
        document.getElementById("numberOfConvertedForA").classList.add("color");

        document.getElementById("secondAdd").classList.remove("color");

        document.getElementById("greatestAdd3").innerHTML = "\"B\"";
        document.getElementById("greatestAdd2").innerHTML = "\"A\"";
        document.getElementById("greatestAdd").innerHTML = "\"A\"";
        

      // Sqrt((percent*(1-Percent)/control_visitor))
      let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;           
      let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
      // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
      let zScore = ((resultA - resultB) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorB, 2))));
      let prob1 = normalCDF((zScore - 0) / 1);
      let prob = Number((prob1).toFixed(2));
     
      
      let confidenceNum =0;
      let confidence =0;

       confidenceNum = resultA - resultB
       confidence = (confidenceNum / resultB) * 100;
      document.getElementById('confidence').innerHTML = toComma(confidence) + '%';
      
      // 0.96
      let p = (prob * 100);

      document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';

    }
    else if (resultA < resultB) {

        document.getElementById("secondAdd").classList.add("color");
        document.getElementById("resultSecondAdd").classList.add("color");
        document.getElementById("firstAdd").classList.remove("color");
        document.getElementById("numberOfViewsForB").classList.add("color");
        document.getElementById("numberOfConvertedForB").classList.add("color");

        document.getElementById("greatestAdd3").innerHTML = "\"A\"";
        document.getElementById("greatestAdd2").innerHTML = "\"B\"";
        document.getElementById("greatestAdd").innerHTML = "\"B\"";

        let confidenceNum =0;
        let confidence =0;

         confidenceNum = resultB - resultA
         confidence = (confidenceNum / resultA) * 100;
        document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

        let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;   
        let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
        // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
        let zScore = ((resultB - resultA) / (Math.sqrt(Math.pow(standardErrorB, 2) + Math.pow(standardErrorA, 2))));
        let prob1 = normalCDF((zScore - 0) / 1);
        let prob = Number((prob1).toFixed(2));
        // 0.96
        let p = (prob * 100);
        document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
    }


    document.getElementById("resultA").innerHTML = toComma(resultA) + "%";
    document.getElementById("resultB").innerHTML = toComma(resultB) + "%";
};

function calculate() {

    let numberOfViewsForA = parseFloat(document.getElementById("numberOfViewsForA").value) || 0;
    let numberOfViewsForB = parseFloat(document.getElementById("numberOfViewsForB").value) || 0;
    let numberOfConvertedForA = parseFloat(document.getElementById("numberOfConvertedForA").value) || 0;
    let numberOfConvertedForB = parseFloat(document.getElementById("numberOfConvertedForB").value) || 0;

    let numberOfViewsForC = parseFloat(document.getElementById("numberOfViewsForC").value) || 0;
    let numberOfConvertedForC = parseFloat(document.getElementById("numberOfConvertedForC").value) || 0;
    let numberOfViewsForD = parseFloat(document.getElementById("numberOfViewsForD").value) || 0;
    let numberOfConvertedForD = parseFloat(document.getElementById("numberOfConvertedForD").value) || 0;

    let resultA = Number((numberOfConvertedForA / numberOfViewsForA)) * 100;
    let resultB = Number((numberOfConvertedForB / numberOfViewsForB)) * 100;
    let resultC = Number((numberOfConvertedForC / numberOfViewsForC)) * 100;
    let resultD = Number((numberOfConvertedForD / numberOfViewsForD)) * 100;

    if (numberOfViewsForA == 0 || numberOfConvertedForA == 0 || numberOfViewsForA.length == 0 || numberOfConvertedForA.length == 0) {

        document.getElementById("resultA").innerHTML = "0%";
    }
    else {
        document.getElementById("resultA").innerHTML = toComma(resultA) + "%";
    }
    if (numberOfViewsForB == 0 || numberOfConvertedForB == 0 || numberOfViewsForB.length == 0 || numberOfConvertedForB.length == 0) {
        document.getElementById("resultB").innerHTML = "0%";
    }
    else {
        document.getElementById("resultB").innerHTML = toComma(resultB) + "%";
    }
    if (numberOfViewsForC == 0 || numberOfConvertedForC == 0 || numberOfViewsForC.length == 0 || numberOfConvertedForC.length == 0) {
        document.getElementById("resultC").innerHTML = "0%";
    }
    else {
        document.getElementById("resultC").innerHTML = toComma(resultC) + "%";
    }
    if (numberOfViewsForD == 0 || numberOfConvertedForD == 0 || numberOfViewsForD.length == 0 || numberOfConvertedForD.length == 0) {
        document.getElementById("resultD").innerHTML = "0%";
    }
    else {
        document.getElementById("resultD").innerHTML = toComma(resultD) + "%";
    }

    if (value == 0) {
        if (resultA > resultB) {
            document.getElementById("firstAdd").classList.add("color");
            document.getElementById("resultFirstAdd").classList.add("color");
            document.getElementById("numberOfViewsForA").classList.add("color");
            document.getElementById("numberOfConvertedForA").classList.add("color");

            document.getElementById("secondAdd").classList.remove("color");
            document.getElementById("resultSecondAdd").classList.remove("color");
            document.getElementById("numberOfViewsForB").classList.remove("color");
            document.getElementById("numberOfConvertedForB").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"A\"";
            document.getElementById("greatestAdd3").innerHTML = "\"B\"";
            document.getElementById("greatestAdd2").innerHTML = "\"A\"";

            let confidenceNum =0;
            let confidence =0;

             confidenceNum = resultA - resultB;
             confidence = (confidenceNum / resultB) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

             // Sqrt((percent*(1-Percent)/control_visitor))
             let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
           
             let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
            
 
             // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
 
             let zScore = ((resultA - resultB) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorB, 2))));
             
             let prob1 = normalCDF((zScore - 0) / 1);
             let prob = Number((prob1).toFixed(2));
            
             // 0.96
             let p = (prob * 100);
 
             document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';

        }
        else if (resultA < resultB) {

            document.getElementById("secondAdd").classList.add("color");
            document.getElementById("resultSecondAdd").classList.add("color");
            document.getElementById("numberOfViewsForB").classList.add("color");
            document.getElementById("numberOfConvertedForB").classList.add("color");

            document.getElementById("firstAdd").classList.remove("color");
            document.getElementById("resultFirstAdd").classList.remove("color");
            document.getElementById("numberOfViewsForA").classList.remove("color");
            document.getElementById("numberOfConvertedForA").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"B\"";
            document.getElementById("greatestAdd3").innerHTML = "\"A\"";
            document.getElementById("greatestAdd2").innerHTML = "\"B\"";

            let confidenceNum =0;
            let confidence =0;
             confidenceNum = resultB - resultA
             confidence = (confidenceNum / resultA) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

                // Sqrt((percent*(1-Percent)/control_visitor))
                let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
           
                let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
               
    
                // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
    
                let zScore = ((resultB - resultA) / (Math.sqrt(Math.pow(standardErrorB, 2) + Math.pow(standardErrorA, 2))));
    
                
                let prob1 = normalCDF((zScore - 0) / 1);
                let prob = Number((prob1).toFixed(2));
               
                // 0.96
                let p = (prob * 100);
    
                document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
        }
    }
    else if (value == 1) {

        if ((resultA > resultB) && (resultA > resultC)) {

            document.getElementById("firstAdd").classList.add("color");
            document.getElementById("resultFirstAdd").classList.add("color");
            document.getElementById("numberOfViewsForA").classList.add("color");
            document.getElementById("numberOfConvertedForA").classList.add("color");

            document.getElementById("secondAdd").classList.remove("color");
            document.getElementById("resultSecondAdd").classList.remove("color");
            document.getElementById("numberOfViewsForB").classList.remove("color");
            document.getElementById("numberOfConvertedForB").classList.remove("color");

            document.getElementById("thirdAdd").classList.remove("color");
            document.getElementById("resultThirdAdd").classList.remove("color");
            document.getElementById("numberOfViewsForC").classList.remove("color");
            document.getElementById("numberOfConvertedForC").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"A\"";


            if (resultC > resultB) {
                let confidenceNum =0;
                let confidence =0;
                 confidenceNum = resultA - resultB;
                 confidence = (confidenceNum / resultB) * 100;
                if (confidence == Infinity) {
                    confidence = 100;
                }
                document.getElementById('confidence').innerHTML = toComma(confidence) + '%';
                document.getElementById("greatestAdd3").innerHTML = "\"B\"";
                document.getElementById("greatestAdd2").innerHTML = "\"A\"";

                        // Sqrt((percent*(1-Percent)/control_visitor))
                        let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
               
                        let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
                       
        
                        // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
        
                        let zScore = ((resultA - resultB) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorB, 2))));
                        
                        let prob1 = normalCDF((zScore - 0) / 1);
                        let prob = Number((prob1).toFixed(2));
                       
                        // 0.96
                        let p = (prob * 100);
        
                        document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
            }
            else {
                let confidenceNum =0;
                let confidence =0;
                 confidenceNum = resultA - resultC
                 confidence = (confidenceNum / resultC) * 100;
                if (confidence == Infinity) {
                    confidence = 100;
                }
                document.getElementById('confidence').innerHTML = toComma(confidence) + '%';
                document.getElementById("greatestAdd3").innerHTML = "\"C\"";
                document.getElementById("greatestAdd2").innerHTML = "\"A\"";

                
                let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
               
                let standardErrorC = (Math.sqrt(((resultC / 100) * (1 - resultC / 100) / numberOfViewsForC))) * 100;
                console.log(standardErrorC, 'standardErrorB');

                // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))

                let zScore = ((resultA - resultC) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorC, 2))));
                
                let prob1 = normalCDF((zScore - 0) / 1);
                let prob = Number((prob1).toFixed(2));
               
                // 0.96
                let p = (prob * 100);

                document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
            }


        }
        else if ((resultA < resultB) && (resultB > resultC)) {

            document.getElementById("secondAdd").classList.add("color");
            document.getElementById("resultSecondAdd").classList.add("color");
            document.getElementById("numberOfViewsForB").classList.add("color");
            document.getElementById("numberOfConvertedForB").classList.add("color");

            document.getElementById("resultFirstAdd").classList.remove("color");
            document.getElementById("numberOfViewsForA").classList.remove("color");
            document.getElementById("numberOfConvertedForA").classList.remove("color");

            document.getElementById("thirdAdd").classList.remove("color");
            document.getElementById("resultThirdAdd").classList.remove("color");
            document.getElementById("numberOfViewsForC").classList.remove("color");
            document.getElementById("numberOfConvertedForC").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"B\"";
            document.getElementById("greatestAdd3").innerHTML = "\"A\"";
            document.getElementById("greatestAdd2").innerHTML = "\"B\"";

            let confidenceNum =0;
            let confidence =0;

             confidenceNum = resultB - resultC;
             confidence = (confidenceNum / resultA) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

                // Sqrt((percent*(1-Percent)/control_visitor))
                let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
           
                let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
               
    
                // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
    
                let zScore = ((resultB - resultA) / (Math.sqrt(Math.pow(standardErrorB, 2) + Math.pow(standardErrorA, 2))));
    
                
                let prob1 = normalCDF((zScore - 0) / 1);
                let prob = Number((prob1).toFixed(2));
               
                // 0.96
                let p = (prob * 100);
    
                document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';


        }
        else if ((resultA < resultC) && (resultB < resultC)) {

            document.getElementById("thirdAdd").classList.add("color");
            document.getElementById("resultThirdAdd").classList.add("color");
            document.getElementById("numberOfViewsForC").classList.add("color");
            document.getElementById("numberOfConvertedForC").classList.add("color");

            // turning D into black 
            document.getElementById("secondAdd").classList.remove("color");
            document.getElementById("resultSecondAdd").classList.remove("color");
            document.getElementById("numberOfViewsForB").classList.remove("color");
            document.getElementById("numberOfConvertedForB").classList.remove("color");

            // turning A into black
            document.getElementById("firstAdd").classList.remove("color");
            document.getElementById("resultFirstAdd").classList.remove("color");
            document.getElementById("numberOfViewsForA").classList.remove("color");
            document.getElementById("numberOfConvertedForA").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"C\"";
            document.getElementById("greatestAdd3").innerHTML = "\"A\"";
            document.getElementById("greatestAdd2").innerHTML = "\"C\"";

            let confidenceNum =0;
            let confidence =0;

             confidenceNum = resultC - resultA;
             confidence = (confidenceNum / resultA) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

             // Sqrt((percent*(1-Percent)/control_visitor))
             let standardErrorC = Math.sqrt(((resultC / 100) * (1 - resultC / 100) / numberOfViewsForC)) * 100;
             console.log(standardErrorC, 'standardErrorA');
             let standardErrorA = (Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA))) * 100;
             console.log(standardErrorA, 'standardErrorB');
 
             // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
 
             let zScore = ((resultC - resultA) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorC, 2))));
 
             
             let prob1 = normalCDF((zScore - 0) / 1);
             let prob = Number((prob1).toFixed(2));
            
             // 0.96
             let p = (prob * 100);
             document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';

        }
    }
    else if (value == 2) {
        if ((resultA > resultB) && (resultA > resultC) && (resultA > resultD)) {
            document.getElementById("firstAdd").classList.add("color");
            document.getElementById("resultFirstAdd").classList.add("color");
            document.getElementById("numberOfViewsForA").classList.add("color");
            document.getElementById("numberOfConvertedForA").classList.add("color");

            document.getElementById("secondAdd").classList.remove("color");
            document.getElementById("resultSecondAdd").classList.remove("color");
            document.getElementById("numberOfViewsForB").classList.remove("color");
            document.getElementById("numberOfConvertedForB").classList.remove("color");

            document.getElementById("thirdAdd").classList.remove("color");
            document.getElementById("resultThirdAdd").classList.remove("color");
            document.getElementById("numberOfViewsForC").classList.remove("color");
            document.getElementById("numberOfConvertedForC").classList.remove("color");

            document.getElementById("fourthAdd").classList.remove("color");
            document.getElementById("resultFourthAdd").classList.remove("color");
            document.getElementById("numberOfViewsForD").classList.remove("color");
            document.getElementById("numberOfConvertedForD").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"A\"";


            if ((resultB < resultC) && (resultB < resultD)) {
                let confidenceNum =0;
                let confidence =0;
                 confidenceNum = resultA - resultB;
                confidence = (confidenceNum / resultB) * 100;
                if (confidence == Infinity) {
                    confidence = 100;
                }
                document.getElementById('confidence').innerHTML = toComma(confidence) + '%';
                document.getElementById("greatestAdd3").innerHTML = "\"B\"";
                document.getElementById("greatestAdd2").innerHTML = "\"A\"";

                 // Sqrt((percent*(1-Percent)/control_visitor))
                 let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
               
                 let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
                
 
                 // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
 
                 let zScore = ((resultA - resultB) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorB, 2))));
                 
                 let prob1 = normalCDF((zScore - 0) / 1);
                 let prob = Number((prob1).toFixed(2));
                
                 // 0.96
                 let p = (prob * 100);
 
                 document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
            }
            else if ((resultC < resultB) && (resultC < resultD)) {
                let confidenceNum =0;
                let confidence =0;
                 confidenceNum = resultA - resultC;
                 confidence = (confidenceNum / resultC) * 100;
                if (confidence == Infinity) {
                    confidence = 100;
                }
                document.getElementById('confidence').innerHTML = toComma(confidence) + '%';
                document.getElementById("greatestAdd3").innerHTML = "\"C\"";
                document.getElementById("greatestAdd2").innerHTML = "\"A\"";

                let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
               
                let standardErrorC = (Math.sqrt(((resultC / 100) * (1 - resultC / 100) / numberOfViewsForC))) * 100;
                console.log(standardErrorC, 'standardErrorB');

                // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))

                let zScore = ((resultA - resultC) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorC, 2))));
                
                let prob1 = normalCDF((zScore - 0) / 1);
                let prob = Number((prob1).toFixed(2));
               
                // 0.96
                let p = (prob * 100);

                document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';

            }
            else if ((resultD < resultB) && (resultD < resultC)) {
                let confidenceNum =0;
                let confidence =0;
                 confidenceNum = resultA - resultD;
                 confidence = (confidenceNum / resultD) * 100;
                if (confidence == Infinity) {
                    confidence = 100;
                }
                document.getElementById('confidence').innerHTML = toComma(confidence) + '%';
                document.getElementById("greatestAdd3").innerHTML = "\"D\"";
                document.getElementById("greatestAdd2").innerHTML = "\"A\"";

                let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
               
                let standardErrorD = (Math.sqrt(((resultD / 100) * (1 - resultD / 100) / numberOfViewsForD))) * 100;
                console.log(standardErrorD, 'standardErrorB');

                // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))

                let zScore = ((resultA - resultD) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorD, 2))));
                
                let prob1 = normalCDF((zScore - 0) / 1);
                let prob = Number((prob1).toFixed(2));
               
                // 0.96
                let p = (prob * 100);

                document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';

            }
        }
        else if ((resultA < resultB) && (resultB > resultC) && (resultB > resultD)) {
            document.getElementById("secondAdd").classList.add("color");
            document.getElementById("resultSecondAdd").classList.add("color");
            document.getElementById("numberOfViewsForB").classList.add("color");
            document.getElementById("numberOfConvertedForB").classList.add("color");

            document.getElementById("firstAdd").classList.remove("color");
            document.getElementById("resultFirstAdd").classList.remove("color");
            document.getElementById("numberOfViewsForA").classList.remove("color");
            document.getElementById("numberOfConvertedForA").classList.remove("color");

            document.getElementById("thirdAdd").classList.remove("color");
            document.getElementById("resultThirdAdd").classList.remove("color");
            document.getElementById("numberOfViewsForC").classList.remove("color");
            document.getElementById("numberOfConvertedForC").classList.remove("color");


            document.getElementById("fourthAdd").classList.remove("color");
            document.getElementById("resultFourthAdd").classList.remove("color");
            document.getElementById("numberOfViewsForD").classList.remove("color");
            document.getElementById("numberOfConvertedForD").classList.remove("color");

            document.getElementById("greatestAdd").innerHTML = "\"B\"";
            document.getElementById("greatestAdd3").innerHTML = "\"A\"";
            document.getElementById("greatestAdd2").innerHTML = "\"B\"";

            let confidenceNum =0;
            let confidence =0;
             confidenceNum = resultB - resultA;
             confidence = (confidenceNum / resultA) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

            let standardErrorA = Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA)) * 100;
           
            let standardErrorB = (Math.sqrt(((resultB / 100) * (1 - resultB / 100) / numberOfViewsForB))) * 100;
           

            // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))

            let zScore = ((resultB - resultA) / (Math.sqrt(Math.pow(standardErrorB, 2) + Math.pow(standardErrorA, 2))));

            
            let prob1 = normalCDF((zScore - 0) / 1);
            let prob = Number((prob1).toFixed(2));
           
            // 0.96
            let p = (prob * 100);

            document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
        }
        else if ((resultA < resultC) && (resultB < resultC) && (resultC > resultD)) {

            document.getElementById("thirdAdd").classList.add("color");
            document.getElementById("resultThirdAdd").classList.add("color");
            document.getElementById("numberOfViewsForC").classList.add("color");
            document.getElementById("numberOfConvertedForC").classList.add("color");

            // turning D into black 
            document.getElementById("secondAdd").classList.remove("color");
            document.getElementById("resultSecondAdd").classList.remove("color");
            document.getElementById("numberOfViewsForB").classList.remove("color");
            document.getElementById("numberOfConvertedForB").classList.remove("color");

            // turning A into black
            document.getElementById("firstAdd").classList.remove("color");
            document.getElementById("resultFirstAdd").classList.remove("color");
            document.getElementById("numberOfViewsForA").classList.remove("color");
            document.getElementById("numberOfConvertedForA").classList.remove("color");

            document.getElementById("fourthAdd").classList.remove("color");
            document.getElementById("resultFourthAdd").classList.remove("color");
            document.getElementById("numberOfViewsForD").classList.remove("color");
            document.getElementById("numberOfConvertedForD").classList.remove("color");


            document.getElementById("greatestAdd").innerHTML = "\"C\"";
            document.getElementById("greatestAdd3").innerHTML = "\"A\"";
            document.getElementById("greatestAdd2").innerHTML = "\"C\"";

            let confidenceNum =0;
            let confidence =0;

             confidenceNum = resultC - resultA;
             confidence = (confidenceNum / resultA) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';

                // Sqrt((percent*(1-Percent)/control_visitor))
                let standardErrorC = Math.sqrt(((resultC / 100) * (1 - resultC / 100) / numberOfViewsForC)) * 100;
            
                let standardErrorA = (Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA))) * 100;
                
                // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))
    
                let zScore = ((resultC - resultA) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorC, 2))));
    
                
                let prob1 = normalCDF((zScore - 0) / 1);
                let prob = Number((prob1).toFixed(2));
               
                // 0.96
                let p = (prob * 100);
                document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';


        }
        else if ((resultA < resultD) && (resultB < resultD) && (resultC < resultD)) {


            document.getElementById("thirdAdd").classList.remove("color");
            document.getElementById("resultThirdAdd").classList.remove("color");
            document.getElementById("numberOfViewsForC").classList.remove("color");
            document.getElementById("numberOfConvertedForC").classList.remove("color");

            // turning D into black 
            document.getElementById("secondAdd").classList.remove("color");
            document.getElementById("resultSecondAdd").classList.remove("color");
            document.getElementById("numberOfViewsForB").classList.remove("color");
            document.getElementById("numberOfConvertedForB").classList.remove("color");

            // turning A into black
            document.getElementById("firstAdd").classList.remove("color");
            document.getElementById("resultFirstAdd").classList.remove("color");
            document.getElementById("numberOfViewsForA").classList.remove("color");
            document.getElementById("numberOfConvertedForA").classList.remove("color");

            document.getElementById("fourthAdd").classList.add("color");
            document.getElementById("resultFourthAdd").classList.add("color");
            document.getElementById("numberOfViewsForD").classList.add("color");
            document.getElementById("numberOfConvertedForD").classList.add("color");


            document.getElementById("greatestAdd").innerHTML = "\"D\"";
            document.getElementById("greatestAdd3").innerHTML = "\"A\"";
            document.getElementById("greatestAdd2").innerHTML = "\"D\"";
            
            let confidenceNum =0;
            let confidence =0;

             confidenceNum = resultD - resultA;
             confidence = (confidenceNum / resultA) * 100;
            if (confidence == Infinity) {
                confidence = 100;
            }
            document.getElementById('confidence').innerHTML = toComma(confidence) + '%';


            let standardErrorD = Math.sqrt(((resultD / 100) * (1 - resultD / 100) / numberOfViewsForD)) * 100;
            let standardErrorA = (Math.sqrt(((resultA / 100) * (1 - resultA / 100) / numberOfViewsForA))) * 100;
           
            // =(control_p-variation_p)/SQRT(POWER(control_se,2)+POWER(variation_se,2))

            let zScore = ((resultD - resultA) / (Math.sqrt(Math.pow(standardErrorA, 2) + Math.pow(standardErrorD, 2))));

            
            let prob1 = normalCDF((zScore - 0) / 1);
            let prob = Number((prob1).toFixed(2));
           
            // 0.96
            let p = (prob * 100);
            document.getElementById("greatestAddPercent").innerHTML = toComma(p) + '%';
       
        }
    }
}


function add() {
    value++;
    if (value == 1) {
        document.getElementById("thirdAdd").classList.remove("d-none");
        document.getElementById("resultThirdAdd").classList.remove("d-none");

    }
    else if (value == 2) {
        document.getElementById("fourthAdd").classList.remove("d-none");
        document.getElementById("resultFourthAdd").classList.remove("d-none");
    }
}
function remove() {

    if (value == 1) {
        document.getElementById("thirdAdd").classList.add("d-none");
        document.getElementById("resultThirdAdd").classList.add("d-none");
        document.getElementById("numberOfViewsForC").value = 0;
        document.getElementById("numberOfConvertedForC").value = 0;
        document.getElementById("thirdAdd").classList.remove("color");
        document.getElementById("resultThirdAdd").classList.remove("color");
        document.getElementById("numberOfViewsForC").classList.remove("color");
        document.getElementById("numberOfConvertedForC").classList.remove("color");
    }
    else if (value == 2) {
        document.getElementById("fourthAdd").classList.add("d-none");
        document.getElementById("resultFourthAdd").classList.add("d-none");
        document.getElementById("numberOfViewsForD").value = 0;
        document.getElementById("numberOfConvertedForD").value = 0;
        document.getElementById("fourthAdd").classList.remove("color");
        document.getElementById("resultFourthAdd").classList.remove("color");
        document.getElementById("numberOfViewsForD").classList.remove("color");
        document.getElementById("numberOfConvertedForD").classList.remove("color");
    }
    value--;
    calculate();
}




let toComma = (x) => x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

