// LCS
function solve(i,j){

	//select characters to compare
	addClass(TBODY.rows[1].cells[j+2],'select-char');
	var l = document.createElement('li');

	if (A[i - 1] == B[j - 1]){
		//Two characters are the same Top left corner+1
		L[i][j] = L[i - 1][j - 1] + 1;
		
		l.innerHTML = A[i - 1]+' == '+B[j - 1]+': The value in the upper left corner + 1 is set to the current value';
		TBODY.rows[i+2].cells[j+2].innerHTML='↖'+L[i][j];
		addClass(TBODY.rows[i+2].cells[j+2],'current-td');
		addClass(TBODY.rows[i+2-1].cells[j+2-1],'select-td');
	}
	else {

		if(L[i][j - 1] > L[i - 1][j]){
			L[i][j] =  L[i][j - 1];
			l.innerHTML = A[i - 1]+' != '+B[j - 1]+': because '+L[i][j - 1] +' > '+L[i - 1][j]+' So the value on the left is set to the current value';
			TBODY.rows[i+2].cells[j+2].innerHTML='←'+L[i][j];

		}else{
			L[i][j] =  L[i - 1][j];
			l.innerHTML = A[i - 1]+' != '+B[j - 1]+': because '+L[i][j - 1] +' <= '+L[i - 1][j]+' So the upper value is set to the current value';
			TBODY.rows[i+2].cells[j+2].innerHTML='↑ '+L[i][j];
		}
		addClass(TBODY.rows[i+2].cells[j+2],'current-td');
		addClass(TBODY.rows[i+2-1].cells[j+2],'select-td');
		addClass(TBODY.rows[i+2].cells[j+2-1],'select-td');

	}
	OL.appendChild(l);
	l.scrollIntoView();

}
//Solve the next step
function afterStep(){
	J++;
	if(J>=L[0].length){
		J = 1;
		I++;
	}
	if(I>=L.length){
		var l = document.createElement('li');
		l.innerHTML = 'Complete the form！';
		OL.appendChild(l);
		l.scrollIntoView();
		if(state!='next'){
			setTimeout(function(){
				removeSelect(lasti,lastj);
				findLCS();
			},500);
		}

	}
}

//find longest common subsequence
function findLCS(){

	var i = L.length-1;
	var j = L[0].length-1;
	while(i>0&&j>0){
		if (A[i - 1] == B[j - 1]){
			//Two characters are the same Top left +1
			addClass(TBODY.rows[i+2].cells[j+2],'current-td');
			result = A[i-1]+result;
			j--;
			i--;
		}
		else {
			//two characters are not equal
			if(L[i][j - 1] > L[i - 1][j]){
				//big left
				addClass(TBODY.rows[i+2].cells[j+2],'select-td');
				j--;
				

			}else{
				addClass(TBODY.rows[i+2].cells[j+2],'select-td');
				i--;
			}
			
		}

	}

	var l = document.createElement('li');
	l.innerHTML = 'The longest common subsequence is: '+result;
	OL.appendChild(l);
	l.scrollIntoView();
	setState('end');

}
