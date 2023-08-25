

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
	
	
	{
		//program-3
		// Multiplication
		
		let a=prompt("Enter The Number");
		let b=1;
		let c;
		
		while(b<21){
			c=a*b;
			console.log(`${b}*${a}=${c}`);
			b++
		}
		
    }
	
	{
		// program-4
		// Get five mark from user and find grade
		
	let a=60;
	let b=60;
	let c=60;
	let d=60;
	let e=60;
	
	
	
	function one(){
		
		let average=(a+b+c+d+e)/5;
		return average
	}
	
	function two(){
		
		let average=one()
		
		if(average>=60){
			console.log("first class grade")
		}
		
		else if(average>=50){
			console.log("second class grade")
		}
		
		else{
			console.log("average grade")
	}
	two()
	}
	
	{
	// program-5
	// input =EMAIL @NUMBER ADD;
	//example546@gmail.com   output=15
	
	var a=prompt("enter your value");
	let b=0;
	for(i=0;i<=a.length;i++){
		
		if((a[i]>=0)||(a[i]<=9)){
			let c=parseInt(a[i])
			b+=c
		}
	}
	console.log(b);
	}
	
	{
		// Program-6
		// Ascending order
		
		let a[10,25,5,87,64];
		
		for(i=0;i<a;i++){
			for(j=i+1;i<a;j++){
				
				if(a[i]>a[j]){
					let x;
					x=a[i];
					a[i]=a[j];
					a[j]=x
				}
			}
		}
		console.log(a)
	}
	
	
	{
		// Program-7
		// Desending order
		
		let a[70,25,51,87,34];
		
		for(i=0;i<a;i++){
			for(j=i+1;i<a;j++){
				
				if(a[i]<a[j]){
					let x;
					x=a[i];
					a[i]=a[j];
					a[j]=x
				}
			}
		}
		console.log(a)
	}
	
	
	{
		// program-8
		// input=1,2,3
		// output=33,22,11
		
		let a=1,2,3
		
		while(a>0){
			let rem=a%10;
			a=(a-rem)/10;
			let b=rem*11;
			console.log(b)
		}
	}
		
		
		
		
		
		
		