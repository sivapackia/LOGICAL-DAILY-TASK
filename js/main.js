

{
	// program-1
    // largest number ;
	
	
	
	var a=12;
	let b=10;
	let c=5;
	
	
	if((a>b)&&(a>c)){
		console.log(`${a} is the largest number`);	
	}
	
	else if((b>a)&&(b>c)){
		console.log(`${b} is the largest number`);
	} 
	
	else{
		console.log(`${c} is the largest number`);
	}
		
}


	
	{
		// program-2
		
		// input=[1,2,3]
		// output=[1,8,27]
		
		
		let a=[1,2,3];
		y=[];
		for(i=0;i<a.length;i++){
			
			let b=a[i]**3
			y.push(b);
			
		}
		console.log(y);
		
		
		let result=a.map((value,index)=>{
			
			return value**3
			
		})
		
		console.log(result);
		
	}
		
		
		
		
		
		
		