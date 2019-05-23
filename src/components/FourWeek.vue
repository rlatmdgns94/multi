<template>
	<div>
		<div class="week_diet_wrap content">
			<div class="week_diet_top">
				<h3 class="week_diet_title">4주차</h3>
				<p class="week_diet_text">메인 식단 표기, 드시려는 식단명을 클릭하셔서 상세정보를 확인하세요.</p>
			</div>
			<table class="week_diet">
				<caption class="blind">식단표</caption>
				<colgroup>
					<col width="20%">
					<col width="20%">
					<col width="20%">
					<col width="20%">
					<col width="20%">
				</colgroup>
				<thead>
					<tr>
						<th scope="col">MON</th>
						<th scope="col">TUE</th>
						<th scope="col">WED</th>
						<th scope="col">THU</th>
						<th scope="col">FRI</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="menu_box">
								<dl>
									<dt>아침</dt>
									<dd>
										<em>아삭이고추 양파무침</em>
									</dd>
									<dd>흑미밥</dd>
									<dd>꽈리고추찜</dd>
									<dd>김 실파무침</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">월요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>아침식단</strong></span>
									<p>흑미밥 + 재첩 맑은국 + 꽈리고추찜 + 아삭이고추 양파무침 + 김 실파무침 + 배추 김치<i class="detail_bar"></i>간식 : 대추, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/rice.jpg" alt="흑미밥">
											</div>
											<div class="food_text">
												<p>흑미밥</p>
												<p>쌀 70g, 흑미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/side1.jpg" alt="꽈리고추찜">
											</div>
											<div class="food_text">
												<p>꽈리고추찜</p>
												<p>꽈리고추 70g, 밀가루 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/side2.jpg" alt="김 실파무침">
											</div>
											<div class="food_text">
												<p>김 실파무침</p>
												<p>김 4g, 실파 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/dessert1.jpg" alt="대추">
											</div>
											<div class="food_text">
												<p>대추</p>
												<p>50g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/soup.jpg" alt="재첩 맑은국">
											</div>
											<div class="food_text">
												<p>재첩 맑은국</p>
												<p>아욱 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/main.jpg" alt="아삭이고추 양파무침(아침메인)">
											</div>
											<div class="food_text">
												<p>아삭이고추 양파무침(아침메인)</p>
												<p>아삭이고추 70g, 양파 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/morning/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>아침</dt>
									<dd>
										<em>시래기 콩가루무침</em>
									</dd>
									<dd>율무밥</dd>
									<dd>두부 톳무침</dd>
									<dd>오이 생채</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">화요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>아침식단</strong></span>
									<p>율무밥 + 양파 부추국 + 두부 톳무침 + 오이 생채 + 시래기 콩가루무침 + 깍두기<i class="detail_bar"></i>간식 : 사과, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/rice.jpg" alt="율무밥">
											</div>
											<div class="food_text">
												<p>율무밥</p>
												<p>쌀 70g, 율무 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/side1.jpg" alt="두부 톳무침">
											</div>
											<div class="food_text">
												<p>두부 톳무침</p>
												<p>두부 60g, 톳 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/main.jpg" alt="시래기 콩가루무침(아침메인)">
											</div>
											<div class="food_text">
												<p>시래기 콩가루무침(아침메인)</p>
												<p>시래기 70g, 콩가루 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/dessert1.jpg" alt="사과">
											</div>
											<div class="food_text">
												<p>사과</p>
												<p>80g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/soup.jpg" alt="양파 부추국">
											</div>
											<div class="food_text">
												<p>양파 부추국</p>
												<p>양파 35g, 부추 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/side2.jpg" alt="오이 생채">
											</div>
											<div class="food_text">
												<p>오이 생채</p>
												<p>오이 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/side3.jpg" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/morning/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>아침</dt>
									<dd>
										<em>흑임자 팽이버섯 무침</em>
									</dd>
									<dd>현미 조밥</dd>
									<dd>가지나물</dd>
									<dd>데친 브로콜리</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">수요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>아침식단</strong></span>
									<p><i class="detail_bar">현미 조밥 + 어묵 맑은국 + 흑임자 팽이버섯무침 + 가지나물 + 데친 브로콜리 + 백련초 인삼 백김치</i>간식 : 금귤, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/rice.jpg" alt="현미 조밥">
											</div>
											<div class="food_text">
												<p>현미 조밥</p>
												<p>쌀 50g, 현미 30g, 조 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/main.jpg" alt="흑임자 팽이버섯무침(아침메인)">
											</div>
											<div class="food_text">
												<p>흑임자 팽이버섯무침(아침메인)</p>
												<p>팽이버섯 50g, 당근 5g, 영양부추 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/side1.jpg" alt="데친 브로콜리">
											</div>
											<div class="food_text">
												<p>데친 브로콜리</p>
												<p>브로콜리 70g, 초고추장 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/dessert1.jpg" alt="금귤">
											</div>
											<div class="food_text">
												<p>금귤</p>
												<p>60g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/soup.jpg" alt="어묵 맑은국">
											</div>
											<div class="food_text">
												<p>어묵 맑은국</p>
												<p>찐 어묵 50g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/side2.jpg" alt="가지나물">
											</div>
											<div class="food_text">
												<p>가지나물</p>
												<p>가지 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/side3.jpg" alt="백련초 인삼 백김치">
											</div>
											<div class="food_text">
												<p>백련초 인삼 백김치</p>
												<p>백년초 20g, 인삼 10g, 배추 50g, 무 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/morning/dessert2.jpg" alt="두유">
											</div>
											<div class="food_text">
												<p>두유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>아침</dt>
									<dd>
										<em>꼬막 양념무침</em>
									</dd>
									<dd>현미 수수밥</dd>
									<dd>무말랭이무침</dd>
									<dd>미역 적양파샐러드</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">목요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>아침식단</strong></span>
									<p>현미 수수밥 + 솎음배추국 + 꼬막 양념무침 + 무말랭이무침 + 미역 적양파샐러드 + 깍두기<i class="detail_bar"></i>간식 : 단감, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/rice.jpg" alt="흑미 수수밥">
											</div>
											<div class="food_text">
												<p>흑미 수수밥</p>
												<p>쌀 50g, 흑미 10g, 수수 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/main.jpg" alt="꼬막 양념무침(아침메인)">
											</div>
											<div class="food_text">
												<p>꼬막 양념무침(아침메인)</p>
												<p>꼬막 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/side1.jpg" alt="미역 적양파샐러드">
											</div>
											<div class="food_text">
												<p>미역 적양파샐러드</p>
												<p>생미역 70g, 적양파 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/dessert1.jpg" alt="단감">
											</div>
											<div class="food_text">
												<p>단감</p>
												<p>50g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/soup.jpg" alt="솎음배추국">
											</div>
											<div class="food_text">
												<p>솎음배추국</p>
												<p>솎음배추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/side2.jpg" alt="무말랭이무침">
											</div>
											<div class="food_text">
												<p>무말랭이무침</p>
												<p>무말랭이 7g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/side3.jpg" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/morning/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>아침</dt>
									<dd>
										<em>고등어 무조림</em>
									</dd>
									<dd>흑미밥</dd>
									<dd>숙주 당근채나물</dd>
									<dd>양상추샐러드</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">금요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>아침식단</strong></span>
									<p>흑미밥 + 시금치국 + 고등어 무조림 + 숙주 당근채나물 + 양상추샐러드 + 배추 김치<i class="detail_bar"></i>간식 : 귤, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/rice.jpg" alt="흑미밥">
											</div>
											<div class="food_text">
												<p>흑미밥</p>
												<p>쌀 70g, 흑미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/main.jpg" alt="고등어 무조림(아침 메인)">
											</div>
											<div class="food_text">
												<p>고등어 무조림(아침메인)</p>
												<p>고등어 50g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/side1.jpg" alt="양상추샐러드">
											</div>
											<div class="food_text">
												<p>양상추샐러드</p>
												<p>양상추 70g, 당근 20g, 적채 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/dessert1.jpg" alt="귤">
											</div>
											<div class="food_text">
												<p>귤</p>
												<p>120g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/soup.jpg" alt="시금치국">
											</div>
											<div class="food_text">
												<p>시금치국</p>
												<p>시금치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/side2.jpg" alt="숙주 당근채나물">
											</div>
											<div class="food_text">
												<p>숙주 당근채나물</p>
												<p>숙주 70g, 당근 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/morning/dessert2.jpg" alt="두유">
											</div>
											<div class="food_text">
												<p>두유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
					</tr>
					<!-- 점심 -->
					<tr>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>소고기 샤브샤브</em>
									</dd>
									<dd>현미밥</dd>
									<dd>박고지 묵은 김치 만두</dd>
									<dd>양배추 무침</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">월요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>점심식단</strong></span>
									<p>현미밥 + 소고기 샤브샤브 + 박고지 묵은 김치 만두 + 무볶음 + 양배추무침 + 갓김치<i class="detail_bar"></i>간식 : 연시, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/rice.jpg" alt="현미밥">
											</div>
											<div class="food_text">
												<p>현미밥</p>
												<p>쌀 70g, 현미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/side1.jpg" alt="박고지 묵은 김치 만두">
											</div>
											<div class="food_text">
												<p>박고지 묵은 김치 만두</p>
												<p>마른 박고지 불린 것 35g, 묵은 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/side2.jpg" alt="양배추무침">
											</div>
											<div class="food_text">
												<p>양배추무침</p>
												<p>양배추 70g, 당근 10g, 풋고추 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/dessert1.jpg" alt="연시">
											</div>
											<div class="food_text">
												<p>연시</p>
												<p>80g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/main.jpg" alt="소고기 샤브샤브">
											</div>
											<div class="food_text">
												<p>소고기 샤브샤브(점심메인)</p>
												<p>소고기 40g, 새송이버섯 25g, 청경채 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/side3.jpg" alt="무볶음">
											</div>
											<div class="food_text">
												<p>무볶음</p>
												<p>무 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/side4.jpg" alt="갓김치">
											</div>
											<div class="food_text">
												<p>갓김치</p>
												<p>갓김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>돼지 구기자볶음</em>
									</dd>
									<dd>잡곡밥</dd>
									<dd>더덕 된장무침</dd>
									<dd>모듬쌈</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">화요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>점심식단</strong></span>
									<p>잡곡밥 + 배추 된장국 + 돼지 구기자볶음 + 더덕 된장무침 + 모듬쌈 + 동치미<i class="detail_bar"></i>간식 : 토마토, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/rice.jpg" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>잡곡밥</p>
												<p>쌀 50g, 현미 20g, 기장 10g, 흑미 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/main.jpg" alt="돼지 구기자볶음">
											</div>
											<div class="food_text">
												<p>돼지 구기자볶음(점심메인)</p>
												<p>돼지안심살 80g, 양배추 20g 마늘 7g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/side1.jpg" alt="모듬쌈">
											</div>
											<div class="food_text">
												<p>모듬쌈</p>
												<p>생다시마 35g, 생미역 35g, 상추 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/dessert1.jpg" alt="토마토">
											</div>
											<div class="food_text">
												<p>토마토</p>
												<p>350g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/soup.jpg" alt="배추 된장국">
											</div>
											<div class="food_text">
												<p>배추 된장국</p>
												<p>배추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/side2.jpg" alt="더덕 된장무침">
											</div>
											<div class="food_text">
												<p>더덕 된장무침</p>
												<p>더덕 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/lunch/side3.jpg" alt="동치미">
											</div>
											<div class="food_text">
												<p>동치미</p>
												<p>동치미 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>코다리 무찜</em>
									</dd>
									<dd>팥밥</dd>
									<dd>계란말이</dd>
									<dd>대파 겉절이</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">수요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>점심식단</strong></span>
									<p>팥밥 + 매생이국 + 코다리 무찜 + 계란말이 + 대파 겉절이 + 배추 김치 <i class="detail_bar"></i>간식 : 바나나, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/rice.jpg" alt="팥밥">
											</div>
											<div class="food_text">
												<p>팥밥</p>
												<p>쌀 70g, 팥 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/main.jpg" alt="코다리 무찜">
											</div>
											<div class="food_text">
												<p>코다리 무찜(점심메인)</p>
												<p>코다리 50g, 무 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/side1.jpg" alt="대파 겉절이">
											</div>
											<div class="food_text">
												<p>대파 겉절이</p>
												<p>대파 40g, 오이 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/dessert1.jpg" alt="바나나">
											</div>
											<div class="food_text">
												<p>바나나</p>
												<p>50g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/soup.jpg" alt="매생이국">
											</div>
											<div class="food_text">
												<p>매생이국</p>
												<p>매생이 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/side2.jpg" alt="계란말이">
											</div>
											<div class="food_text">
												<p>계란말이</p>
												<p>계란 1개, 당근 10g, 실파 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/lunch/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/lunch/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>꽁치구이</em>
									</dd>
									<dd>곤드레 보리밥</dd>
									<dd>청국장 비지찌개</dd>
									<dd>죽순 들깨볶음</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">목요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>점심식단</strong></span>
									<p>곤드레 보리밥 + 청국장 비지찌개 + 꽁치구이 + 죽순 들깨볶음 + 실파 무 생채 + 갓김치<i class="detail_bar"></i> 간식 : 배, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/rice.jpg" alt="곤드레 보리밥">
											</div>
											<div class="food_text">
												<p>곤드레 보리밥</p>
												<p>쌀 60g, 보리 30g, 곤드레 데친 것 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/main.jpg" alt="꽁치구이">
											</div>
											<div class="food_text">
												<p>꽁치구이(점심메인)</p>
												<p>꽁치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/side1.jpg" alt="실파 무 생채">
											</div>
											<div class="food_text">
												<p>실파 무 생채</p>
												<p>실파 35g, 무 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/dessert1.jpg" alt="배">
											</div>
											<div class="food_text">
												<p>배</p>
												<p>110g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/soup.jpg" alt="청국장 비지찌개">
											</div>
											<div class="food_text">
												<p>청국장 비지찌개</p>
												<p>비지 75g, 청국장 20g, 무 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/side2.jpg" alt="죽순 들깨볶음">
											</div>
											<div class="food_text">
												<p>죽순 들깨볶음</p>
												<p>죽순 70g, 들깨 8g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/side3.jpg" alt="갓김치">
											</div>
											<div class="food_text">
												<p>갓김치</p>
												<p>갓김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/lunch/dessert2.jpg" alt="두유">
											</div>
											<div class="food_text">
												<p>두유</p>
												<p>두유 200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>황태 전골</em>
									</dd>
									<dd>현미 율무밥</dd>
									<dd>소고기 완자전</dd>
									<dd>건나물 비빔</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">금요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>점심식단</strong></span>
									<p>현미 율무밥 + 황태 전골 + 소고기 완자전 + 건나물 비빔 + 부추 양파무침 + 동치미<i class="detail_bar"></i>간식 : 키위, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/rice.jpg" alt="현미 율무밥">
											</div>
											<div class="food_text">
												<p>현미 율무밥</p>
												<p>쌀 40g, 발아현미 25g, 율무 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/side1.jpg" alt="소고기 완자전">
											</div>
											<div class="food_text">
												<p>소고기 완자전</p>
												<p>소고기 20g, 두부 40g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/side2.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/dessert1.jpg" alt="키위">
											</div>
											<div class="food_text">
												<p>키위</p>
												<p>80g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/main.jpg" alt="황태 전골">
											</div>
											<div class="food_text">
												<p>황태 전골(점심메인)</p>
												<p>황태 15g, 애느타리버섯 25g, 표고버섯 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/side3.jpg" alt="건나물 비빔">
											</div>
											<div class="food_text">
												<p>건나물 비빔</p>
												<p>건고비 5g, 건취 5g, 건고사리 5g, 건호박 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/side4.jpg" alt="동치미">
											</div>
											<div class="food_text">
												<p>동치미</p>
												<p>동치미 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/lunch/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
					</tr>
					<!-- 저녁 -->
					<tr>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>갈치구이</em>
									</dd>
									<dd>수수밥</dd>
									<dd>비지찌개</dd>
									<dd>우엉조림</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">월요일 배송상품</p>
									<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>저녁식단</strong></span>
									<p>수수밥 + 비지찌개 + 갈치구이 + 우엉조림 + 미나리 무침 + 파김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/dinner/rice.jpg" alt="수수밥">
											</div>
											<div class="food_text">
												<p>수수밥</p>
												<p>쌀 70g, 수수 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/dinner/main.jpg" alt="갈치구이(저녁메인)">
											</div>
											<div class="food_text">
												<p>갈치구이(저녁메인)</p>
												<p>갈치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/dinner/side1.jpg" alt="미나리 무침">
											</div>
											<div class="food_text">
												<p>미나리 무침</p>
												<p>미나리 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img no_dessert">
												<span class="blind">간식없음</span>
											</div>
											<div class="food_text">
												<p class="food_text_v2">간식 없음</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/dinner/soup.jpg" alt="비지찌개">
											</div>
											<div class="food_text">
												<p>비지찌개</p>
												<p>콩비지 75g, 돼지고기 목살 20g, 배추 김치 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/dinner/side2.jpg" alt="우엉조림">
											</div>
											<div class="food_text">
												<p>우엉조림</p>
												<p>우엉 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/mon/dinner/side3.jpg" alt="파김치">
											</div>
											<div class="food_text">
												<p>파김치</p>
												<p>파김치 50g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>닭볶음</em>
									</dd>
									<dd>흑미 찰밥</dd>
									<dd>파프리카구이</dd>
									<dd>고사리나물</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">화요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>저녁식단</strong></span>
									<p>흑미 찰밥 + 오징어 무국 + 닭볶음 + 파프리카구이 + 고사리나물 + 갓김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/dinner/rice.jpg" alt="흑미 찰밥">
											</div>
											<div class="food_text">
												<p>흑미 찰밥</p>
												<p>찹쌀 60g, 흑미 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/dinner/main.jpg" alt="닭볶음">
											</div>
											<div class="food_text">
												<p>닭볶음(저녁메인)</p>
												<p>닭가슴살 40g, 양파 10g, 당근 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/dinner/side1.jpg" alt="고사리나물">
											</div>
											<div class="food_text">
												<p>고사리나물</p>
												<p>고사리 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img no_dessert">
												<span class="blind">간식없음</span>
											</div>
											<div class="food_text">
												<p class="food_text_v2">간식 없음</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/dinner/soup.jpg" alt="오징어 무국">
											</div>
											<div class="food_text">
												<p>오징어 무국</p>
												<p>오징어 50g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/dinner/side2.jpg" alt="파프리카구이">
											</div>
											<div class="food_text">
												<p>파프리카구이</p>
												<p>청홍파프리카 35g씩, 발사믹드레싱 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/tue/dinner/side3.jpg" alt="갓김치">
											</div>
											<div class="food_text">
												<p>갓김치</p>
												<p>갓김치 50g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>우엉 잡채 월남쌈</em>
									</dd>
									<dd>보리무밥</dd>
									<dd>돈육 김치찌개</dd>
									<dd>문어초회</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">수요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>저녁식단</strong></span>
									<p>보리무밥 + 돈육 김치찌개 + 문어초회 + 우엉 잡채 월남쌈 + 애호박나물 + 알타리 김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/dinner/rice.jpg" alt="보리무밥">
											</div>
											<div class="food_text">
												<p>보리무밥</p>
												<p>쌀 40g, 보리 20g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/dinner/side1.jpg" alt="문어초회">
											</div>
											<div class="food_text">
												<p>문어초회</p>
												<p>문어 70g, 오이 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/dinner/side2.jpg" alt="애호박나물">
											</div>
											<div class="food_text">
												<p>애호박나물</p>
												<p>애호박 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img no_dessert">
												<span class="blind">간식없음</span>
											</div>
											<div class="food_text">
												<p class="food_text_v2">간식 없음</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/dinner/soup.jpg" alt="돈육 김치찌개">
											</div>
											<div class="food_text">
												<p>돈육 김치찌개</p>
												<p>배추 김치 70g, 돈육 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/dinner/main.jpg" alt="우엉 잡채 월남쌈(저녁메인)">
											</div>
											<div class="food_text">
												<p>우엉 잡채 월남쌈(저녁메인)</p>
												<p>우엉 40g, 당면 25g, 표고버섯 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/wed/dinner/side3.jpg" alt="알타리 김치">
											</div>
											<div class="food_text">
												<p>알타리 김치</p>
												<p>알타리 김치 50g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>소고기볶음</em>
									</dd>
									<dd>잡곡밥</dd>
									<dd>청경채나물</dd>
									<dd>도라지 생채</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">목요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>저녁식단</strong></span>
									<p>잡곡밥 + 무 굴국 + 소고기볶음 + 청경채나물 + 도라지 생채 + 백김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/dinner/rice.jpg" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>잡곡밥</p>
												<p>쌀 60g, 현미 10g, 흑미 10g, 조 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/dinner/main.jpg" alt="소고기볶음(저녁메인)">
											</div>
											<div class="food_text">
												<p>소고기볶음(저녁메인)</p>
												<p>소고기 40g, 양파 35g, 대파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/dinner/side1.jpg" alt="도라지 생채">
											</div>
											<div class="food_text">
												<p>도라지 생채</p>
												<p>도라지 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img no_dessert">
												<span class="blind">간식없음</span>
											</div>
											<div class="food_text">
												<p class="food_text_v2">간식 없음</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/dinner/soup.jpg" alt="무 굴국">
											</div>
											<div class="food_text">
												<p>무 굴국</p>
												<p>굴 70g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/dinner/side2.jpg" alt="청경채나물">
											</div>
											<div class="food_text">
												<p>청경채나물</p>
												<p>청경채 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/thu/dinner/side3.jpg" alt="백김치">
											</div>
											<div class="food_text">
												<p>백김치</p>
												<p>백김치 50g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>돼지갈비찜</em>
									</dd>
									<dd>현미 무밥</dd>
									<dd>마늘쫑볶음</dd>
									<dd>시금치 나물</dd>
								</dl>
							</div>
							<!-- 상세 메뉴 -->
							<div class="menu_detail">
								<div class="detail_top">
									<p class="top_title">금요일 배송상품</p>
								<router-link to="#" class="detail_close">
										<img src="../assets/img/cancel.png" alt="상세 식단 닫기">
									</router-link>
								</div>
								<div class="detail_bottom">
									<span class="detail_title"><strong>저녁식단</strong></span>
									<p>현미 무밥 + 홍합 미역국 + 돼지갈비찜 + 마늘쫑볶음 + 시금치 나물 + 알타리 김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/dinner/rice.jpg" alt="현미 무밥">
											</div>
											<div class="food_text">
												<p>현미 무밥</p>
												<p>쌀 50g, 현미 40g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/dinner/main.jpg" alt="돼지갈비찜">
											</div>
											<div class="food_text">
												<p>돼지갈비찜(저녁메인)</p>
												<p>돼지갈비 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/dinner/side1.jpg" alt="시금치 나물">
											</div>
											<div class="food_text">
												<p>시금치 나물</p>
												<p>시금치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img no_dessert">
												<span class="blind">간식없음</span>
											</div>
											<div class="food_text">
												<p class="food_text_v2">간식 없음</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/dinner/soup.jpg" alt="홍합 미역국">
											</div>
											<div class="food_text">
												<p>홍합 미역국</p>
												<p>건미역 2.5g, 홍합 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/dinner/side2.jpg" alt="마늘쫑볶음">
											</div>
											<div class="food_text">
												<p>마늘쫑볶음</p>
												<p>마늘쫑 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/fourweek/fri/dinner/side3.jpg" alt="알타리 김치">
											</div>
											<div class="food_text">
												<p>알타리 김치</p>
												<p>알타리 김치 50g</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script>
export default {
  name: "FourWeek",
};
</script>
