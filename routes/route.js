exports.homepagecars=function(req,res){
  res.render('homepagecars',{title:'I LOVE CARS....',
                    headline:'Every brand of cars have there own existence'
                    });
                  }


exports.carbrand=function(req,res){
    var carBrandName=req.params.carbrand;
    var title,heading;
    var imageCount=4;

    if(carBrandName==='bmw'){
       title="BMW";
       heading="BMW: BMW cars are having great performance.";
    }
    else if(carBrandName==='audi'){
       title="Audi";
       heading="Audi: Audi cars are using great technologies.";
    }
    else if(carBrandName==='bentley'){
       title="BENTLEY";
       heading="BENTLEY: BENTLEY care are having beautiful look.";
    }
    else if(carBrandName==='suzuki'){
       title="SUZUKI";
       heading="SUZUKI: SUZUKI gives a lot of lower budget cara in many countries.";
    }
    else if(carBrandName==='honda'){
       title="HONDA";
       heading="HONDA: HONDA provides great engines in lower budgets.";
       imageCount=6;
    }

    res.render('brand',{
        title:title,
        headline:heading,
        city:carBrandName,
        numberOfImages:imageCount});
  }
