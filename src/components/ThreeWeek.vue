<template>
	<div>
		<div class="week_diet_wrap content">
			<div class="week_diet_top">
				<h3 class="week_diet_title">3주차</h3>
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
										<em>토란대 들깨무침</em>
									</dd>
									<dd>흑미밥</dd>
									<dd>섭산적</dd>
									<dd>미역 초무침</dd>
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
									<p>흑미밥 + 된장찌개 + 섭산적 + 토란대 들깨무침 + 미역 초무침 + 수삼 백김치<i class="detail_bar"></i>간식 : 대추, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/rice.jpg" alt="흑미밥">
											</div>
											<div class="food_text">
												<p>흑미밥</p>
												<p>쌀 70g, 흑미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/side1.jpg" alt="섭산적">
											</div>
											<div class="food_text">
												<p>섭산적</p>
												<p>소고기 60g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/side2.jpg" alt="미역 초무침">
											</div>
											<div class="food_text">
												<p>미역 초무침</p>
												<p>물미역 70g, 양파 10g, 당근 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/dessert1.jpg" alt="대추">
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
												<img src="../assets/threeweek/mon/morning/soup.jpg" alt="된장찌개">
											</div>
											<div class="food_text">
												<p>된장찌개</p>
												<p>두부 40g, 호박 35g, 무 20g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/main.jpg" alt="토란대 들깨무침(아침메인)">
											</div>
											<div class="food_text">
												<p>토란대 들깨무침(아침메인)</p>
												<p>토란대 70g, 들깨 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/side3.jpg" alt="수삼 백김치">
											</div>
											<div class="food_text">
												<p>수삼 백김치</p>
												<p>수삼 백김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/morning/dessert2.jpg" alt="우유">
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
										<em>메추리알 돈장조림</em>
									</dd>
									<dd>발아현미밥</dd>
									<dd>시금치무침</dd>
									<dd>양배추 깻잎롤</dd>
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
									<p>발아현미밥 + 홍합 맑은무국 + 메추리알 돈장조림 + 시금치무침 + 양배추 깻잎롤 + 알타리 김치<i class="detail_bar"></i>간식 : 방울토마토, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/rice.jpg" alt="발아현미밥">
											</div>
											<div class="food_text">
												<p>발아현미밥</p>
												<p>발아현미 90g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/main.jpg" alt="메추리알 돈장조림(아침메인)">
											</div>
											<div class="food_text">
												<p>메추리알 돈장조림(아침메인)</p>
												<p>메추리알 20g, 돈육 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/side1.jpg" alt="양배추 깻잎롤">
											</div>
											<div class="food_text">
												<p>양배추 깻잎롤</p>
												<p>양배추 35g, 깻잎 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/dessert1.jpg" alt="방울토마토">
											</div>
											<div class="food_text">
												<p>방울토마토</p>
												<p>300g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/soup.jpg" alt="홍합 맑은무국">
											</div>
											<div class="food_text">
												<p>홍합 맑은무국</p>
												<p>홍합 35g, 무 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/side2.jpg" alt="시금치무침">
											</div>
											<div class="food_text">
												<p>시금치무침</p>
												<p>시금치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/side3.jpg" alt="알타리 김치">
											</div>
											<div class="food_text">
												<p>알타리 김치</p>
												<p>알타리 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/morning/dessert2.jpg" alt="우유">
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
										<em>생률 고구마죽</em>
									</dd>
									<dd>묵은지 달걀말이</dd>
									<dd>오복채무침</dd>
									<dd>꽈리고추 쥐치포볶음</dd>
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
									<p>생률 고구마죽 + 묵은지 달걀말이 + 오복채무침 + 꽈리고추 쥐치포볶음 + 나박 김치 + 현미쑥 인절미<i class="detail_bar"></i>간식 : 사과, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/main.jpg" alt="고구마죽">
											</div>
											<div class="food_text">
												<p>생률 고구마죽(아침메인)</p>
												<p>쌀 30g, 생률 30g, 고구마 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/side1.jpg" alt="오복채무침">
											</div>
											<div class="food_text">
												<p>오복채무침</p>
												<p>오복채 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/side2.jpg" alt="나박 김치">
											</div>
											<div class="food_text">
												<p>나박 김치</p>
												<p>나박 김치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/dessert1.jpg" alt="사과">
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
												<img src="../assets/threeweek/wed/morning/side3.jpg" alt="묵은지 달걀말이">
											</div>
											<div class="food_text">
												<p>묵은지 달걀말이</p>
												<p>묵은지 25g, 달걀 1개</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/side4.jpg" alt="꽈리고추 쥐치포볶음">
											</div>
											<div class="food_text">
												<p>꽈리고추 쥐치포볶음</p>
												<p>꽈리고추 70g, 쥐치포 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/side5.jpg" alt="현미쑥 인절미">
											</div>
											<div class="food_text">
												<p>현미쑥 인절미</p>
												<p>현미쑥 인절미 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/morning/dessert2.jpg" alt="우유">
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
										<em>팽이버섯 부추 잡채</em>
									</dd>
									<dd>흑미 수수밥</dd>
									<dd>연포탕</dd>
									<dd>새싹 연두부</dd>
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
									<p>흑미 수수밥 + 연포탕 + 팽이버섯 부추 잡채 + 새싹 연두부 + 파래 무침 + 깍두기 <i class="detail_bar"></i>간식 : 무화과, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/rice.jpg" alt="흑미 수수밥">
											</div>
											<div class="food_text">
												<p>흑미 수수밥</p>
												<p>쌀 50g, 흑미 10g, 수수 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/main.jpg" alt="팽이버섯 부추 잡채(아침메인)">
											</div>
											<div class="food_text">
												<p>팽이버섯 부추 잡채(아침메인)</p>
												<p>팽이버섯 50g, 부추 35g, 당근 10g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/side1.jpg" alt="노각 생채">
											</div>
											<div class="food_text">
												<p>파래 무침</p>
												<p>파래 70g, 무 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/dessert1.jpg" alt="자두">
											</div>
											<div class="food_text">
												<p>무화과</p>
												<p>100g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/soup.jpg" alt="연포탕">
											</div>
											<div class="food_text">
												<p>연포탕</p>
												<p>낙지 100g, 무 35g, 호박 20g, 미나리 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/side2.jpg" alt="새싹 연두부">
											</div>
											<div class="food_text">
												<p>새싹 연두부</p>
												<p>새싹 20g, 연두부 150g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/side3.jpg" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/morning/dessert2.jpg" alt="우유">
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
										<em>표고버섯볶음</em>
									</dd>
									<dd>고구마밥</dd>
									<dd>대합 마늘구이</dd>
									<dd>그린샐러드</dd>
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
									<p>현미밥 + 다시마 애호박 맑은 국 + 오징어볶음 + 풋고추 된장무침 + 머위대나물 + 깍두기<i class="detail_bar"></i>간식 : 참외, 플레인 요거트</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/rice.jpg" alt="고구마밥">
											</div>
											<div class="food_text">
												<p>고구마밥</p>
												<p>쌀 60g, 고구마 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/side1.jpg" alt="대합 마늘구이">
											</div>
											<div class="food_text">
												<p>대합 마늘구이</p>
												<p>대합 70g, 마늘 7g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/side2.jpg" alt="그린샐러드">
											</div>
											<div class="food_text">
												<p>그린샐러드</p>
												<p>양상추 35g, 베이비샐러드 20g, 드레싱</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/dessert1.jpg" alt="연시">
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
												<img src="../assets/threeweek/fri/morning/soup.jpg" alt="다시마 맑은국">
											</div>
											<div class="food_text">
												<p>다시마 맑은국</p>
												<p>무 70g, 건다시마 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/main.jpg" alt="표고버섯볶음(아침메인)">
											</div>
											<div class="food_text">
												<p>표고버섯볶음(아침메인)</p>
												<p>표고버섯 50g, 실파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/morning/dessert2.jpg" alt="우유">
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
					<!-- 점심 -->
					<tr>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>소고기 완자탕</em>
									</dd>
									<dd>현미 조밥</dd>
									<dd>낙지파강회</dd>
									<dd>버섯샐러드</dd>
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
									<p>현미 조밥 + 소고기 완자탕 + 낙지파강회 + 버섯샐러드 + 곤약 다시마조림 + 무청 김치<i class="detail_bar"></i>간식 : 사과, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/rice.jpg" alt="현미 조밥">
											</div>
											<div class="food_text">
												<p>현미 조밥</p>
												<p>쌀 50g, 현미 20g, 조 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/side1.jpg" alt="낙지파강회">
											</div>
											<div class="food_text">
												<p>낙지파강회</p>
												<p>낙지 100g, 실파 25g, 홍고추 10g, 초고추장 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/side2.jpg" alt="곤약 다시마조림">
											</div>
											<div class="food_text">
												<p>곤약 다시마조림</p>
												<p>곤약 50g, 다시마 35g, 표고버섯 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/dessert1.jpg" alt="사과">
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
												<img src="../assets/threeweek/mon/lunch/main.jpg" alt="소고기 완자탕(점심메인)">
											</div>
											<div class="food_text">
												<p>소고기 완자탕(점심메인)</p>
												<p>소고기 20g, 두부 40g, 양파 10g, 무 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/side3.jpg" alt="버섯샐러드">
											</div>
											<div class="food_text">
												<p>버섯샐러드</p>
												<p>표고버서서 10g, 애느타리버섯 10g, 새송이 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/side4.jpg" alt="무청 김치">
											</div>
											<div class="food_text">
												<p>무청 김치</p>
												<p>무청 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/dessert2.jpg" alt="두유">
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
									<dt>점심</dt>
									<dd>
										<em>연어 숭채 만두</em>
									</dd>
									<dd>팥밥</dd>
									<dd>취나물 장무침</dd>
									<dd>숙주 아스파라거스볶음</dd>
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
									<p>팥밥 + 시래기 된장찌개 + 연어 숭채 만두 + 취나물 장무침 + 숙주 아스파라거스볶음 + 배추 김치<i class="detail_bar"></i>간식 : 배, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/lunch/rice.jpg" alt="팥밥">
											</div>
											<div class="food_text">
												<p>팥밥</p>
												<p>쌀 70g, 팥 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/lunch/main.jpg" alt="연어 숭채 만두(점심메인)">
											</div>
											<div class="food_text">
												<p>연어 숭채 만두(점심메인)</p>
												<p>배추 70g, 연어 75g, 두부 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/lunch/side1.jpg" alt="숙주 아스파라거스볶음">
											</div>
											<div class="food_text">
												<p>숙주 아스파라거스볶음</p>
												<p>숙주 70g, 아스파라거스 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/lunch/dessert1.jpg" alt="배">
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
												<img src="../assets/threeweek/tue/lunch/soup.jpg" alt="시래기 된장찌개">
											</div>
											<div class="food_text">
												<p>시래기 된장찌개</p>
												<p>무청 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/lunch/side2.jpg" alt="취나물 장무침">
											</div>
											<div class="food_text">
												<p>취나물 장무침</p>
												<p>취나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/lunch/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/lunch/dessert2.jpg" alt="두유">
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
									<dt>점심</dt>
									<dd>
										<em>왕갈비 버섯 전골</em>
									</dd>
									<dd>잡곡밥</dd>
									<dd>석쇠를 이용한 구운 채소</dd>
									<dd>곤약 잡채</dd>
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
									<p>잡곡밥 + 왕갈비 버섯 전골 + 석쇠를 이용한 구운 채소 + 곤약 잡채 + 명이나물 간장절임 + 석박지<i class="detail_bar"></i>간식 : 단감, 플레인 요거트</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/lunch/rice.jpg" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>잡곡밥</p>
												<p>쌀 40g, 차조 10g, 수수10g, 흑미 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/lunch/side1.jpg" alt="석쇠를 이용한 구운 채소">
											</div>
											<div class="food_text">
												<p>석쇠를 이용한 구운 채소</p>
												<p>갖가지 채소들</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/lunch/side2.jpg" alt="명이나물 간장절임">
											</div>
											<div class="food_text">
												<p>명이나물 간장절임</p>
												<p>명이나물 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/lunch/dessert1.jpg" alt="단감">
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
												<img src="../assets/threeweek/wed/lunch/main.jpg" alt="왕갈비 버섯 전골(점심메인)">
											</div>
											<div class="food_text">
												<p>왕갈비 버섯 전골(점심메인)</p>
												<p>왕갈비살 80g, 배추 35g, 느타리버섯 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/lunch/side3.jpg" alt="곤약 잡채">
											</div>
											<div class="food_text">
												<p>곤약 잡채</p>
												<p>곤약 70g, 당근 10g, 양파 10g, 목이버섯 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/lunch/side4.jpg" alt="석박지">
											</div>
											<div class="food_text">
												<p>석박지</p>
												<p>석박지 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/dessert2.jpg" alt="플레인 요거트">
											</div>
											<div class="food_text">
												<p>플레인 요거트</p>
												<p>100g</p>
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
										<em>도토리묵무침</em>
									</dd>
									<dd>무굴밥</dd>
									<dd>전어구이</dd>
									<dd>삼색 우엉볶음</dd>
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
									<p>무굴밥 + 콩나물국 + 전어구이 + 도토리묵무침 + 삼색 우엉볶음 + 갓김치<i class="detail_bar"></i> 간식 : 바나나, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/rice.jpg" alt="무굴밥">
											</div>
											<div class="food_text">
												<p>무굴밥</p>
												<p>쌀 75g, 무 20g 굴 70g, 양념장 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/side1.jpg" alt="전어구이">
											</div>
											<div class="food_text">
												<p>전어구이</p>
												<p>전어 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/side2.jpg" alt="삼색 우엉볶음">
											</div>
											<div class="food_text">
												<p>삼색 우엉볶음</p>
												<p>우엉 40g, 당근 10g, 피망 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/dessert1.jpg" alt="바나나">
											</div>
											<div class="food_text">
												<p>바나나</p>
												<p>60g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/soup.jpg" alt="콩나물국">
											</div>
											<div class="food_text">
												<p>콩나물국</p>
												<p>콩나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/main.jpg" alt="도토리묵무침">
											</div>
											<div class="food_text">
												<p>도토리묵무침(점심메인)</p>
												<p>도토리묵 100g 우이 20g, 쑥갓 10g, 당근 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/side3.jpg" alt="갓김치">
											</div>
											<div class="food_text">
												<p>갓김치</p>
												<p>갓김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/lunch/dessert2.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>우유 200g</p>
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
										<em>돼지고기 편육</em>
									</dd>
									<dd>흑미 은행밥</dd>
									<dd>모듬쌈</dd>
									<dd>무말랭이무침</dd>
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
									<p>흑미 은행밥 + 배추 된장국 + 돼지고기 편육 + 모듬쌈 + 무말랭이무침 + 오이 김치<i class="detail_bar"></i>간식 : 골드키위, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/rice.jpg" alt="흑미 은행밥">
											</div>
											<div class="food_text">
												<p>흑미 은행밥</p>
												<p>쌀 60g, 흑미 15g, 은행 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/main.jpg" alt="돼지고기 편육(점심메인)">
											</div>
											<div class="food_text">
												<p>돼지고기 편육(점심메인)</p>
												<p>돼지고기 아롱사태 80g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/side1.jpg" alt="무말랭이무침">
											</div>
											<div class="food_text">
												<p>무말랭이무침</p>
												<p>무말랭이 7g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/dessert1.jpg" alt="골드키위">
											</div>
											<div class="food_text">
												<p>골드키위</p>
												<p>80g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/soup.jpg" alt="배추 된장국">
											</div>
											<div class="food_text">
												<p>배추 된장국</p>
												<p>배추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/side2.jpg" alt="모듬쌈">
											</div>
											<div class="food_text">
												<p>모듬쌈</p>
												<p>상추 20g, 쌈 배추 20g, 치커리 20g, 쌈장 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/side3.jpg" alt="오이 김치">
											</div>
											<div class="food_text">
												<p>오이 김치</p>
												<p>오이 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/lunch/dessert2.jpg" alt="두유">
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
					<!-- 저녁 -->
					<tr>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>브로콜리 양파볶음</em>
									</dd>
									<dd>보리밥</dd>
									<dd>두부선</dd>
									<dd>밤 오이 생채</dd>
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
									<p>보리밥 + 김치 콩나물국 + 두부선 + 브로콜리 양파볶음 + 밤 오이 생채 + 갓김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/dinner/rice.jpg" alt="보리밥">
											</div>
											<div class="food_text">
												<p>보리밥</p>
												<p>쌀 45g, 보리 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/dinner/side1.jpg" alt="두부선">
											</div>
											<div class="food_text">
												<p>두부선</p>
												<p>두부 80g, 당근 3g, 오이 3g, 석이버섯 1g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/mon/dinner/side2.jpg" alt="밤 오이 생채">
											</div>
											<div class="food_text">
												<p>밤 오이 생채</p>
												<p>도라지 40g, 양파 10g</p>
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
												<img src="../assets/threeweek/tue/dinner/soup.jpg" alt="김치 콩나물국">
											</div>
											<div class="food_text">
												<p>김치 콩나물국</p>
												<p>김치 40g, 콩나물 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/main.jpg" alt="브로콜리 양파볶음(저녁메인)">
											</div>
											<div class="food_text">
												<p>브로콜리 양파볶음(저녁메인)</p>
												<p>브로콜리 70g, 양파 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/side3.jpg" alt="갓김치">
											</div>
											<div class="food_text">
												<p>갓김치</p>
												<p>갓김치 50g</p>
											</div>hfjgvymgng
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
										<em>소고기 마늘조림</em>
									</dd>
									<dd>현미 보리밥</dd>
									<dd>미나리무침</dd>
									<dd>가지짐</dd>
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
									<p>현비 보리밥 + 아욱국 + 소고기 마늘조림 + 미나리무침 + 가지찜 + 파김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/rice.jpg" alt="현미 보리밥">
											</div>
											<div class="food_text">
												<p>현미 보리밥</p>
												<p>발아현미 55g, 보리 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/main.jpg" alt="소고기 마늘조림(저녁메인)">
											</div>
											<div class="food_text">
												<p>소고기 마늘조림(저녁메인)</p>
												<p>소고기 40g, 마늘 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/side1.jpg" alt="가지찜">
											</div>
											<div class="food_text">
												<p>가지찜</p>
												<p>가지 70g</p>
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
												<img src="../assets/threeweek/tue/dinner/soup.jpg" alt="아욱국">
											</div>
											<div class="food_text">
												<p>아욱국</p>
												<p>아욱 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/side2.jpg" alt="미나리무침">
											</div>
											<div class="food_text">
												<p>미나리무침</p>
												<p>미나리 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/tue/dinner/side3.jpg" alt="파김치">
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
										<em>과메기구이</em>
									</dd>
									<dd>잡곡밥</dd>
									<dd>쌈채</dd>
									<dd>무 양념찜</dd>
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
									<p>잡곡밥 + 근대 매운장국 + 과메기구이 + 쌈채 + 무 양념찜 + 깻잎 김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/dinner/rice.jpg" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>잡곡밥</p>
												<p>쌀 60g, 현미 10g, 보리 10g, 차조 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/dinner/main.jpg" alt="과메기구이">
											</div>
											<div class="food_text">
												<p>과메기구이(저녁 메인)</p>
												<p>과메기 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/dinner/side1.jpg" alt="무 양념찜">
											</div>
											<div class="food_text">
												<p>무 양념찜</p>
												<p>무 70g</p>
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
												<img src="../assets/threeweek/wed/dinner/soup.jpg" alt="근대 매운장국">
											</div>
											<div class="food_text">
												<p>근대 매운장국</p>
												<p>근대 70g, 청량고추 5g, 된장 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/dinner/side2.jpg" alt="쌈채">
											</div>
											<div class="food_text">
												<p>쌈채</p>
												<p>배추 70g, 물미역 35g, 마늘쫑 15g, 김 2g </p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/wed/dinner/side3.jpg" alt="깻잎 김치">
											</div>
											<div class="food_text">
												<p>깻잎 김치</p>
												<p>깻잎 김치 20g</p>
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
										<em>새송이버섯 떡갈비</em>
									</dd>
									<dd>돌솥 송이버섯 흑미밥</dd>
									<dd>들깨 토란국</dd>
									<dd>더덕구이</dd>
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
									<p>돌솥 송이버섯 흑미밥 + 들깨 토란국 + 새송이버섯 떡갈비 + 더덕구이 + 부추 겉절이 + 알타리 김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/dinner/rice.jpg" alt="돌솥 송이버섯 흑미밥">
											</div>
											<div class="food_text">
												<p>돌솥 송이버섯 흑미밥</p>
												<p>쌀 60g, 흑미 15g, 자연산 송이버섯 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/dinner/main.jpg" alt="새송이버섯 떡갈비">
											</div>
											<div class="food_text">
												<p>새송이버섯 떡갈비(저녁 메인)</p>
												<p>소고기 40g, 새송이버섯 25g, 건표고버섯 7g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/dinner/side1.jpg" alt="부추 겉절이">
											</div>
											<div class="food_text">
												<p>부추 겉절이</p>
												<p>부추 35g, 양파 10g</p>
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
												<img src="../assets/threeweek/thu/dinner/soup.jpg" alt="물김치">
											</div>
											<div class="food_text">
												<p>열무 물김치</p>
												<p>열무 물김치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/dinner/side2.jpg" alt="물김치">
											</div>
											<div class="food_text">
												<p>더덕구이</p>
												<p>더덕 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/thu/dinner/side3.jpg" alt="물김치">
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
										<em>꽃게 해물찜</em>
									</dd>
									<dd>잡곡밥</dd>
									<dd>연근 호박전</dd>
									<dd>무쌈말이</dd>
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
									<p>잡곡밥 + 미역국 + 꽃게 해물찜 + 연근 호박전 + 무쌈말이 + 파김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/dinner/rice.jpg" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>잡곡밥</p>
												<p>쌀 30g, 현미 20g, 율무 20g, 기장 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/dinner/main.jpg" alt="민어 양념찜(저녁메인)">
											</div>
											<div class="food_text">
												<p>꽃게 해물찜(저녁메인)</p>
												<p>꽃게 35g, 낙지 50g, 새우 25g, 전복 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/dinner/side1.jpg" alt="무쌈말이">
											</div>
											<div class="food_text">
												<p>무쌈말이</p>
												<p>무쌈 4장, 팽이버섯 25g, 홍파프리카 10g</p>
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
												<img src="../assets/threeweek/fri/dinner/soup.jpg" alt="미역국">
											</div>
											<div class="food_text">
												<p>미역국</p>
												<p>건미역 2.5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/dinner/side2.jpg" alt="연근 호박전">
											</div>
											<div class="food_text">
												<p>연근 호박전</p>
												<p>연근 40g, 호박 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/threeweek/fri/dinner/side3.jpg" alt="파김치">
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
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script>
export default {
  name: "ThreeWeek",
};
</script>
