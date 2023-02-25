n = 0.01
a = 0.1
particle = []
particle2 = []
focus = 0
let extraCanvas;

let joinedText ="CONTENTMENT:	this artwork makes me feel happy because of the pleasant mix of popping colors. CONTENTMENT:	The contrasting wit the bolder colors suggests a pleasant day. SOMETHING ELSE:	This makes me feel annoyed. It is nonsensical and I do not like it. EXCITEMENT:	It makes me feel happy, like I am watching a school of fish. \n만족: 이 그림은 튀는 색상의 유쾌한 혼합으로 인해 기분이 좋아집니다. 만족: 대비되는 색과 대담한 색상이 쾌적한 날을 보여주는 것 같아요. 그 외의것: 이 작품은 나를 짜증나게 합니다. 말도 안되고 싫습니다. 신남: 물고기 떼를 보고 있는 것처럼 기분이 좋아집니다."
let alphabet
let posX, posY
let drawLetters = []
let drawLines = false
let drawText = true

// 背景
function setup() {
	createCanvas(windowWidth, windowHeight);
	extraCanvas = createGraphics(windowWidth, windowHeight);
	extraCanvas.clear();
	background(175, 150, 70);
	for (i = 0; i < 1000; i++) {
	particle.push(createVector(random(width), random(height)))
		particle2.push(createVector(random(width), random(height)))
	}	
}

function draw() {

	
	for (i = 0; i < random(200, 1000); i++) {
	p = particle[i]
		p2 = particle2[i]
			strokeWeight(random(2))
		stroke(0, random(0, random(1, random(2, random(5, 50)))))
		noFill()
		circle(p.x, p.y, random(1, random(20, 150)))
	
		p.x += random(-map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))), map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))))
		p.y += random(map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))), -map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))))
		
		p2.x += random(-map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))), map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))))
		p2.y += random(map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))), -map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))))
		
		stroke(185 + (sin(n)*10), 155, 75, random([0, random(0, random(0, 5))]))
		strokeWeight(1)
		line(p.x, p2.y, p2.x, p.y)
		line(p.x, p.y, p2.x, p2.y)
				stroke(160 + (sin(n)*20), 50, 10, random([0, random(0, random(0, 10))]))
		line(p.x, p.y, random(width), height)
				line(p2.x, p2.y, random(width), height)
		
		stroke(175, 150, 70, 20)
		strokeWeight(1)
		point(random(p.x, p2.x), random(p.y, p2.y))
	}
	n += map(cos(a), -1, 1, 0, map(sin(a/100), -1, 1, 0.01, 0.00001))
	a += sin(n)	

// ----------- Text -----------
textFont('DungGeunMo.ttf', 100);
extraCanvas.fill(255,255,255);
alphabet = getUniqCharacters()
	console.log(alphabet)
for (let i = 0; i < alphabet.length; i++) {
   drawLetters[i] = true
}
  push();
  
  posX = 20
  posY = 40
  let oldX = 0
  let oldY = 0
  
  for (let i = 0; i < joinedText.length; i++) {
    let upperCaseChar = joinedText.charAt(i).toUpperCase()
    let index = alphabet.indexOf(upperCaseChar)
    if (index < 0) continue
    let sortY = index * 20 + 40
    let m = map(mouseX, 50, width - 50, 0, 1)
    m = constrain(m, 0, 1)
    let interY = lerp(posY, sortY, m)
    
    if (drawLetters[index]) {
      if (drawText) {
        //extraCanvas.noStroke()
        text(joinedText.charAt(i), posX, interY)
      }
    } else {
      oldX = 0
      oldY = 0
    }
    
    posX += textWidth(joinedText.charAt(i))
    if (posX >= width - 200 && upperCaseChar == ' ') {
      posY += 30
      posX = 20
    }
  }
 // image(extraCanvas,0,0);
  pop();
 
}

function getUniqCharacters() {
	var charsArray = joinedText.toUpperCase().split('');
	var uniqCharsArray = charsArray.filter(function(char, index) {
	  return charsArray.indexOf(char) == index;
	}).sort();
	return uniqCharsArray.join('');
  }
