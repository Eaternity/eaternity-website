		
		//Class Barrel
		function Barrel(params) {
			var self = this;

			//edit here the default colors [bottom, middle, top]:
			this.defaultColors = {
				green: ['#6c8a41', '#bcc9a9', '#aab98f'],
				blue: ['#186694','#94b8ce','#8398b9'],
				gray: ['#808285','#c4c5c6','#b7b9bd']
			}
			
			//edit here the height of the largest barrel (default-value: 200):
			// don't forget to adapt this.origin_y
			this.maximumHeight = 110;
			
			//y-Position of origin (default-value: 264):
			// don't forget to adapt the size of the whole svg (-> directly in the svg-Tag. Default-values: width="640" height="360")
			this.origin_y = 145.2;

			this.params = params;
			this.barrels = new Array(3);
			this.airplaneLabel = Array();
			this.svg = document.getElementById(this.params.id);
			
			for (i = 0; i < 3; i++) {
				this.barrels[i] = Array();
				this.barrels[i]['shadow'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' shadow')[0];
				this.barrels[i]['bottom-rect'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' bottom-rect')[0];
				this.barrels[i]['bottom-ellipse'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' bottom-ellipse')[0];
				this.barrels[i]['middle-rect'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' middle-rect')[0];
				this.barrels[i]['middle-ellipse'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' middle-ellipse')[0];
				this.barrels[i]['top-ellipse'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' top-ellipse')[0];
				this.barrels[i]['number-label'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' number-label')[0];
                this.barrels[i]['text-label-wrapper'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' text-label-wrapper')[0];
                this.barrels[i]['text-label'] = this.svg.getElementsByClassName('tonne-' + (i+1) + ' text-label')[0];
            }
			
			this.airplaneLabel['text'] = this.svg.getElementsByClassName('airplane-label text')[0];
			this.airplaneLabel['line'] = this.svg.getElementsByClassName('airplane-label line')[0];
			this.airplaneLabel['ellipse'] = this.svg.getElementsByClassName('airplane-label ellipse')[0];
			
			this.baseLine = this.svg.getElementsByClassName('baseline')[0];
			
			
			//Memeber functions:
			
			this.labelBarrels = function(numberLabels, textLabels){
				for(i = 0; i < 3; i++){
					self.barrels[i]['number-label'].appendChild(document.createTextNode(numberLabels[i] + self.params.unit));
					self.barrels[i]['text-label'].appendChild(document.createTextNode(textLabels[i]));
                    if (textLabels[i] == "SIE") {
                        self.barrels[i]['text-label'].style.fontFamily = "'FuturaLT-Heavy', sans-serif";
                        self.barrels[i]['text-label'].style.fontWeight = "bold";
                    }
				}
			};
			
			this.colorBarrels = function(colors){
				for(i = 0; i < 3; i++){
					self.barrels[i]['bottom-rect'].setAttribute('fill', colors[i][0]);
					self.barrels[i]['bottom-ellipse'].setAttribute('fill', colors[i][0]);
					self.barrels[i]['middle-rect'].setAttribute('fill', colors[i][0]);
					self.barrels[i]['middle-ellipse'].setAttribute('fill', colors[i][0]);
					self.barrels[i]['top-ellipse'].setAttribute('fill', colors[i][1]);
				}
			};
			
			this.setPositions = function(){
				var maximumTon = 0;
				var totalTons = self.params.columns.data1;
				var airplaneTons = self.params.columns.data2;
				var len = totalTons.length;
				for(var i = 0; i < len; i++){
					if (totalTons[i] > maximumTon){
						maximumTon = totalTons[i];
					}
				}
				var totalHeights = Array(len);
				var airplaneHeights = Array(len);
				var diffHeights = Array(len);
				for(var i = 0; i < len; i++){
					totalHeights[i] = Math.round(self.maximumHeight / maximumTon * totalTons[i]);
					airplaneHeights[i] = Math.round(self.maximumHeight / maximumTon * airplaneTons[i]);
					diffHeights[i] = totalHeights[i] - airplaneHeights[i];
				}
				
				//reposition and scaling barrels
				for(var i = 0; i < len; i++){
					self.barrels[i]['bottom-rect'].setAttribute('y', self.origin_y - diffHeights[i]);
					self.barrels[i]['bottom-rect'].setAttribute('height', diffHeights[i]);
					
					self.barrels[i]['bottom-ellipse'].setAttribute('cy', self.origin_y);
					
					self.barrels[i]['middle-rect'].setAttribute('y', self.origin_y - totalHeights[i]);
					self.barrels[i]['middle-rect'].setAttribute('height', airplaneHeights[i]);
					self.barrels[i]['middle-ellipse'].setAttribute('cy', self.origin_y - diffHeights[i]);
					
					self.barrels[i]['top-ellipse'].setAttribute('cy', self.origin_y - totalHeights[i]);
					
					self.barrels[i]['shadow'].setAttribute('cy', self.origin_y);
				}
				
				//reposition baseline
//				self.baseLine.setAttribute('y1', self.origin_y);
//				self.baseLine.setAttribute('y2', self.origin_y);
				
				//reposition airplane label
				self.airplaneLabel['ellipse'].setAttribute('cy', self.origin_y - (totalHeights[len-1] - airplaneHeights[len-1]/2));
				self.airplaneLabel['line'].setAttribute('y1', self.origin_y - (totalHeights[len-1] - airplaneHeights[len-1]/2));
				
				//reposition tone and text labels:
				for(i = 0; i < 3; i++){
					self.barrels[i]['number-label'].setAttribute('y', self.origin_y + 50);
                    self.barrels[i]['text-label-wrapper'].setAttribute('y', self.origin_y + 60);
				}
			};
			
			this.labelBarrels(self.params.columns.data1, self.params.columns.x);
			this.colorBarrels(self.params.color);
			this.setPositions();
		};
