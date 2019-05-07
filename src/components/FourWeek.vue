<template>
	<div>
		<div class="week_diet_wrap content">
			<div class="week_diet_top">
				<h3 class="week_diet_title">2주차</h3>
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
										<em>소고기 채소 불고기</em>
									</dd>
									<dd>흑미밥</dd>
									<dd>마늘쫑볶음</dd>
									<dd>오이 양파 생채</dd>
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
									<p>흑미밥 + 아욱 된장국 + 소고기 채소 불고기 + 마늘쫑볶음 + 오이 양파 생채 + 열무 김치<i class="detail_bar"></i>간식 : 황도 복숭아, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/rice.jpg" alt="흑미밥">
											</div>
											<div class="food_text">
												<p>흑미밥</p>
												<p>쌀 70g, 흑미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/main.jpg" alt="소고기 채소 불고기">
											</div>
											<div class="food_text">
												<p>소고기 채소 불고기(아침메인)</p>
												<p>소고기 40g, 깻잎 2g, 양파 10g, 당근 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/side1.jpg" alt="오이 양파 생채">
											</div>
											<div class="food_text">
												<p>오이 양파 생채</p>
												<p>오이 70g, 양파 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/dessert1.jpg" alt="황도 복숭아">
											</div>
											<div class="food_text">
												<p>황도 복숭아</p>
												<p>150g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/soup.jpg" alt="아욱 된장국">
											</div>
											<div class="food_text">
												<p>아욱 된장국</p>
												<p>아욱 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/side2.jpg" alt="마늘쫑볶음">
											</div>
											<div class="food_text">
												<p>마늘쫑볶음</p>
												<p>마늘쫑 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/side3.jpg" alt="열무 김치">
											</div>
											<div class="food_text">
												<p>열무 김치</p>
												<p>열무 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/morning/dessert2.jpg" alt="우유">
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
										<em>연근 초무침</em>
									</dd>
									<dd>율무밥</dd>
									<dd>대파 두부 황태국</dd>
									<dd>참나물무침</dd>
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
									<p>율무밥 + 대파 두부 황태국 + 참나물무침 + 무나물 + 연근 초무침 + 배추 김치<i class="detail_bar"></i>간식 : 포도, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/rice.jpg" alt="율무밥">
											</div>
											<div class="food_text">
												<p>율무밥</p>
												<p>쌀 70g, 율무 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/side1.jpg" alt="참나물무침">
											</div>
											<div class="food_text">
												<p>참나물무침</p>
												<p>참나물 70g, 양파 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/main.jpg" alt="연근 초무침">
											</div>
											<div class="food_text">
												<p>연근 초무침(아침메인)</p>
												<p>연근 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/dessert1.jpg" alt="포도">
											</div>
											<div class="food_text">
												<p>포도</p>
												<p>80g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/soup.jpg" alt="대파 두부 황태국">
											</div>
											<div class="food_text">
												<p>대파 두부 황태국</p>
												<p>황태 15g, 두부 80g, 대파 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/side2.jpg" alt="무나물">
											</div>
											<div class="food_text">
												<p>무나물</p>
												<p>무 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/morning/dessert2.jpg" alt="우유">
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
										<em>애호박 새우살전</em>
									</dd>
									<dd>흑미 보리밥</dd>
									<dd>채소 스틱</dd>
									<dd>배추 된장무침</dd>
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
									<p>흑미 보리밥 + 소고기 무국 + 애호박 새우살전 + 배추 된장무침 + 채소 스틱 + 깍두기<i class="detail_bar"></i>간식 : 방울토마토, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/rice.jpg" alt="보리밥">
											</div>
											<div class="food_text">
												<p>흑미 보리밥</p>
												<p>쌀 60g, 흑미 10g, 보리 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/main.jpg" alt="애호박 새우나물">
											</div>
											<div class="food_text">
												<p>애호박 새우살전(아침 메인)</p>
												<p>애호박 70g, 새우살 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/side1.jpg" alt="채소 스틱">
											</div>
											<div class="food_text">
												<p>채소 스틱</p>
												<p>오이 35g, 당근 35g, 풋고추 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/dessert1.jpg" alt="체리">
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
												<img src="../assets/twoweek/wed/morning/soup.jpg" alt="소고기 무국">
											</div>
											<div class="food_text">
												<p>소고기 무국</p>
												<p>소고기 40g, 무 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/side2.jpg" alt="배추 된장무침">
											</div>
											<div class="food_text">
												<p>배추 된장무침</p>
												<p>배추 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/side3.jpg" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/morning/dessert2.jpg" alt="우유">
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
										<em>소고기볶음</em>
									</dd>
									<dd>차조밥</dd>
									<dd>고구마순나물</dd>
									<dd>노각 생채</dd>
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
									<p>차조밥 + 배추 된장국 + 소고기볶음 + 고구마순나물 + 노각 생채 + 부추 김치<i class="detail_bar"></i>간식 : 자두, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/rice.jpg" alt="차조밥">
											</div>
											<div class="food_text">
												<p>차조밥</p>
												<p>쌀 70g, 차조 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/main.jpg" alt="소고기볶음">
											</div>
											<div class="food_text">
												<p>소고기볶음(아침메인)</p>
												<p>소고기 40g, 양파 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/side1.jpg" alt="노각 생채">
											</div>
											<div class="food_text">
												<p>노각 생채</p>
												<p>노각 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/dessert1.jpg" alt="자두">
											</div>
											<div class="food_text">
												<p>자두</p>
												<p>150g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/soup.jpg" alt="배추 된장국">
											</div>
											<div class="food_text">
												<p>배추 된장국</p>
												<p>배추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/side2.jpg" alt="고구마순나물">
											</div>
											<div class="food_text">
												<p>고구마순나물</p>
												<p>고구마순 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/side3.jpg" alt="부추 김치">
											</div>
											<div class="food_text">
												<p>부추 김치</p>
												<p>부추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/morning/dessert2.jpg" alt="두유">
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
										<em>오징어볶음</em>
									</dd>
									<dd>현미밥</dd>
									<dd>다시마 애호박 맑은국</dd>
									<dd>풋고추 된장무침</dd>
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
												<img src="../assets/twoweek/fri/morning/rice.jpg" alt="현미밥">
											</div>
											<div class="food_text">
												<p>현미밥</p>
												<p>쌀 70g, 현미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/main.jpg" alt="오징어볶음(아침 메인)">
											</div>
											<div class="food_text">
												<p>오징어볶음(아침메인)</p>
												<p>오징어 50g, 양파 35g, 당근 10g, 풋고추 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/side1.jpg" alt="머위대나물">
											</div>
											<div class="food_text">
												<p>머위대나물</p>
												<p>머위대 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/dessert1.jpg" alt="참외">
											</div>
											<div class="food_text">
												<p>참외</p>
												<p>120g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/soup.jpg" alt="다시마 애호박 맑은국">
											</div>
											<div class="food_text">
												<p>다시마 애호박 맑은국</p>
												<p>애호박 70g, 건다시마 1g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/side2.jpg" alt="아스파라거스">
											</div>
											<div class="food_text">
												<p>풋고추 된장무침</p>
												<p>풋고추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/side3.jpg" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/morning/dessert2.jpg" alt="요거트">
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
					</tr>
					<!-- 점심 -->
					<tr>
						<td>
							<div class="menu_box">
								<dl>
									<dt>점심</dt>
									<dd>
										<em>고등어조림</em>
									</dd>
									<dd>감자 보리밥</dd>
									<dd>연두부 계란국</dd>
									<dd>미나리 생채</dd>
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
									<p>감자 보리밥 + 연두부 계란국 + 고등어조림 + 콩나물무침 + 미나리생채 + 배추 김치<i class="detail_bar"></i>간식 : 딸기, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/rice.jpg" alt="감자 보리밥">
											</div>
											<div class="food_text">
												<p>감자 보리밥</p>
												<p>쌀 45g, 보리 30g, 감자 65g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/main.jpg" alt="고등어조림">
											</div>
											<div class="food_text">
												<p>고등어조림(점심메인)</p>
												<p>고등어 50g, 대파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/side1.jpg" alt="미나리 생채">
											</div>
											<div class="food_text">
												<p>미나리 생채</p>
												<p>미나리 70g, 무 20g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/dessert1.jpg" alt="토마토">
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
												<img src="../assets/twoweek/mon/lunch/soup.jpg" alt="연두부 계란국">
											</div>
											<div class="food_text">
												<p>연두부 계란국</p>
												<p>연두부 75g, 계란 1/2개, 애호박 10g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/side2.jpg" alt="콩나물무침">
											</div>
											<div class="food_text">
												<p>콩나물무침</p>
												<p>콩나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/side3.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/dessert2.jpg" alt="우유">
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
										<em>장어구이와 부추샐러드</em>
									</dd>
									<dd>검은콩 쌀밥</dd>
									<dd>죽순 느타리버섯볶음</dd>
									<dd>취나물</dd>
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
									<p>검은콩 쌀밥 + 우뭇가사리 냉국 + 장어구이와 부추샐러드 + 죽순 느타리버섯볶음 + 취나물 + 가지 김치<i class="detail_bar"></i>간식 : 참외, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/rice.jpg" alt="검은콩 쌀밥">
											</div>
											<div class="food_text">
												<p>검은콩 쌀밥</p>
												<p>쌀 90g, 검은콩 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/main.jpg" alt="장어구이와 부추샐러드">
											</div>
											<div class="food_text">
												<p>장어구이와 부추샐러드(점심메인)</p>
												<p>장어 50g, 부추 35g, 양파 10g, 깻잎 10g, 복분자 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/side1.jpg" alt="취나물">
											</div>
											<div class="food_text">
												<p>취나물</p>
												<p>취나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/dessert1.jpg" alt="참외">
											</div>
											<div class="food_text">
												<p>참외</p>
												<p>120g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/soup.jpg" alt="우뭇가사리 냉국">
											</div>
											<div class="food_text">
												<p>우뭇가사리 냉국</p>
												<p>우뭇가사리 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/side2.jpg" alt="죽순 느타리버섯볶음">
											</div>
											<div class="food_text">
												<p>죽순 느타리버섯볶음</p>
												<p>죽순 35g, 느타리버섯 50g, 양파 10g, 홍고추 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/lunch/side3.jpg" alt="가지 김치">
											</div>
											<div class="food_text">
												<p>가지 김치</p>
												<p>가지 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/dessert2.jpg" alt="우유">
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
										<em>녹차 비빔냉면</em>
									</dd>
									<dd>콩나물 잡채</dd>
									<dd>메밀전병</dd>
									<dd>깻잎순나물</dd>
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
									<p>녹차 비빔냉면 + 콩나물 잡채 + 메밀전병 + 깻잎순나물 + 열무 김치<i class="detail_bar"></i>간식 : 백도 복숭아, 플레인 요거트</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/lunch/main.jpg" alt="비빔냉면">
											</div>
											<div class="food_text">
												<p>녹차 비빔냉면(점심메인)</p>
												<p>녹차냉면(건) 60g, 무 10g, 무순 2g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/lunch/side1.jpg" alt="메밀전병">
											</div>
											<div class="food_text">
												<p>메밀전병</p>
												<p>메밀가루 30g, 배추 김치 50g, 두부 40g, 돈육 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/lunch/side2.jpg" alt="열무 김치">
											</div>
											<div class="food_text">
												<p>열무 김치</p>
												<p>열무 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/lunch/dessert1.jpg" alt="플레인 요거트">
											</div>
											<div class="food_text">
												<p>플레인 요거트</p>
												<p>100g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/lunch/side3.jpg" alt="콩나물 잡채">
											</div>
											<div class="food_text">
												<p>콩나물 잡채</p>
												<p>닭가슴살 20g, 콩나물 70g, 오이 20g, 당근 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/lunch/side4.jpg" alt="깻잎순나물">
											</div>
											<div class="food_text">
												<p>깻잎순나물</p>
												<p>깻잎순 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/lunch/dessert2.jpg" alt="복숭아">
											</div>
											<div class="food_text">
												<p>백도 복숭아</p>
												<p>150g</p>
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
										<em>카레 생선 완자전</em>
									</dd>
									<dd>현미 붉은 팥밥</dd>
									<dd>꽈리고추찜</dd>
									<dd>양배추 레몬 생채</dd>
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
									<p>현미 붉은 팥밥 + 육개장 + 카레 생선 완자전 + 꽈리고추찜 + 양배추 레몬 생채 + 석박지<i class="detail_bar"></i> 간식 : 수박, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/rice.jpg" alt="현미 붉은 팥밥">
											</div>
											<div class="food_text">
												<p>현미 붉은 팥밥</p>
												<p>쌀 30g, 현미 30g, 팥 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/main.jpg" alt="카레 생선 완자전">
											</div>
											<div class="food_text">
												<p>카레 생선 완자전(점심메인)</p>
												<p>흰살생선 25g, 두부 40g, 당근 5g, 양파 10g, 카레 2g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/side1.jpg" alt="양배추 레몬 생채">
											</div>
											<div class="food_text">
												<p>양배추 레몬 생채</p>
												<p>양배추 70g, 레몬즙 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/dessert1.jpg" alt="수박">
											</div>
											<div class="food_text">
												<p>수박</p>
												<p>150g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/soup.jpg" alt="육개장">
											</div>
											<div class="food_text">
												<p>육개장</p>
												<p>소고기 40g, 토란대 35g, 숙주 40g, 대파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/side2.jpg" alt="꽈리고추찜">
											</div>
											<div class="food_text">
												<p>꽈리고추찜</p>
												<p>꽈리고추 70g, 밀가루 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/side3.jpg" alt="석박지">
											</div>
											<div class="food_text">
												<p>석박지</p>
												<p>석박지 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/lunch/dessert2.jpg" alt="우유">
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
										<em>연근 더덕 칡 만두</em>
									</dd>
									<dd>녹두 닭가슴살죽</dd>
									<dd>해파리 냉채</dd>
									<dd>쑥갓 양파무침</dd>
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
									<p>녹두 닭가슴살죽 + 연근 더덕 칡 만두 + 해파리 냉채 + 쑥갓 양파무침 + 배추 김치<i class="detail_bar"></i>간식 : 키위, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/rice.jpg" alt="닭가슴살죽">
											</div>
											<div class="food_text">
												<p>녹두 닭가슴살죽</p>
												<p>쌀 40g, 녹두 20g, 당근 10g, 닭가슴살 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/side1.jpg" alt="해파리 냉채">
											</div>
											<div class="food_text">
												<p>해파리 냉채</p>
												<p>해파리 35g, 오이 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/side2.jpg" alt="배추 김치">
											</div>
											<div class="food_text">
												<p>배추 김치</p>
												<p>배추 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/dessert1.jpg" alt="우유">
											</div>
											<div class="food_text">
												<p>우유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/main.jpg" alt="연근 더덕 칡 만두(점심메인)">
											</div>
											<div class="food_text">
												<p>연근 더덕 칡 만두(점심메인)</p>
												<p>연근 10g, 더덕 20g, 칡즙 20g, 밀가루 30g, 두부 80g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/side3.jpg" alt="쑥갓 양파무침">
											</div>
											<div class="food_text">
												<p>쑥갓 양파무침</p>
												<p>쑥갓 70g, 양파 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/lunch/dessert2.jpg" alt="키위">
											</div>
											<div class="food_text">
												<p>키위</p>
												<p>키위 80g</p>
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
										<em>오리전골</em>
									</dd>
									<dd>현미 찹쌀밥</dd>
									<dd>돈사태찜</dd>
									<dd>도라지 간장조림</dd>
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
									<p>현미 찹쌀밥 + 오리 전골 + 돈사태찜 + 도라지 간장조림 + 상추 겉절이<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/dinner/main.jpg" alt="오리 전골">
											</div>
											<div class="food_text">
												<p>오리 전골(저녁메인)</p>
												<p>오리살 40g, 무 35g, 속배추 20g, 깻잎순 20g, 표고버섯 25g, 느타리버섯 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/dinner/rice.jpg" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>현미 찹쌀밥</p>
												<p>쌀 40g, 찹쌀 30g, 현미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/mon/dinner/side1.jpg" alt="도라지 간장조림">
											</div>
											<div class="food_text">
												<p>도라지 간장조림</p>
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
												<img src="../assets/twoweek/tue/dinner/side2.jpg" alt="돈사태찜">
											</div>
											<div class="food_text">
												<p>돈사태찜</p>
												<p>돼지고기 40g 무 30g, 당근 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/dinner/side3.jpg" alt="상추 겉절이">
											</div>
											<div class="food_text">
												<p>상추 겉절이</p>
												<p>상추 70g</p>
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
										<em>양파 닭안심찜</em>
									</dd>
									<dd>현미밥</dd>
									<dd>마늘칩 그린샐러드</dd>
									<dd>고춧잎나물</dd>
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
									<p>현미밥 + 조랭이 미역국 + 양파 닭안심찜 + 마늘칩 그린샐러드 + 고춧잎나물 + 깍두기<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/dinner/rice.jpg" alt="현미밥">
											</div>
											<div class="food_text">
												<p>현미밥</p>
												<p>쌀 55g, 현미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/dinner/main.jpg" alt="양파 닭안심찜">
											</div>
											<div class="food_text">
												<p>양파 닭안심찜(저녁메인)</p>
												<p>양파 70g, 닭안심 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/dinner/side1.jpg" alt="고춧잎나물">
											</div>
											<div class="food_text">
												<p>고춧잎나물</p>
												<p>고춧잎 70g</p>
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
												<img src="../assets/twoweek/tue/dinner/soup.jpg" alt="미역국">
											</div>
											<div class="food_text">
												<p>조랭이 미역국</p>
												<p>건미역 2.5g, 조랭이떡 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/dinner/side2.jpg" alt="마늘칩 그린샐러드">
											</div>
											<div class="food_text">
												<p>마늘칩 그린샐러드</p>
												<p>마늘 10g, 새싹 20g, 양상추 70g, 오리엔탈드레싱 25g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/tue/dinner/side3.jpg" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
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
										<em>돼지고기 김치찜</em>
									</dd>
									<dd>차조 찹쌀밥</dd>
									<dd>양송이버섯볶음</dd>
									<dd>호박잎쌈과 강된장</dd>
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
									<p>차조 찹쌀밥 + 가지 냉국 + 돼지고기 김치찜 + 양송이버섯볶음 + 호박잎쌈과 강된장 + 파김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/dinner/rice.jpg" alt="차조 찹쌀밥">
											</div>
											<div class="food_text">
												<p>차조 찹쌀밥</p>
												<p>쌀 30g, 찹쌀 30g, 차조 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/dinner/main.jpg" alt="제육볶음">
											</div>
											<div class="food_text">
												<p>제육볶음(저녁 메인)</p>
												<p>돈육 40g, 양파 10g, 당근 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/dinner/side1.jpg" alt="생미역 초무침">
											</div>
											<div class="food_text">
												<p>호박잎쌈과 강된장</p>
												<p>호박잎 50g, 호박 20g, 표고버섯 10g, 된장 15g</p>
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
												<img src="../assets/twoweek/wed/dinner/soup.jpg" alt="가지 냉국">
											</div>
											<div class="food_text">
												<p>가지 냉국</p>
												<p>가지 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/dinner/side2.jpg" alt="양송이버섯볶음">
											</div>
											<div class="food_text">
												<p>양송이버섯볶음</p>
												<p>양송이버섯 70g, 청홍피망 10g씩</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/wed/dinner/side3.jpg" alt="파김치">
											</div>jpg
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
										<em>산나물 비빔</em>
									</dd>
									<dd>무채국</dd>
									<dd>열무 물김치</dd>
									<dd>달래무물김치</dd>
									<dd>오미자 냉차</dd>
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
									<p>산나물 비빔 + 무채국 + 열무 물김치 + 오미자 냉차<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/dinner/main.jpg" alt="산나물 비빔">
											</div>
											<div class="food_text">
												<p>산나물 비빔(저녁메인)</p>
												<p>쌀 90g, 참나물 20g, 곰취 30g, 고사리 20g, 비름 20g, 당근 10g, 소고기 40g, 계란 1개</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/dinner/soup.jpg" alt="무채국">
											</div>
											<div class="food_text">
												<p>무채국</p>
												<p>무 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/dinner/side1.jpg" alt="오미자">
											</div>
											<div class="food_text">
												<p>오미자 냉차</p>
												<p>오미자 200g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/thu/dinner/side2.jpg" alt="물김치">
											</div>
											<div class="food_text">
												<p>열무 물김치</p>
												<p>열무 물김치 70g</p>
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
								</div>
							</div>
							<!-- 상세 메뉴 -->
						</td>
						<td>
							<div class="menu_box">
								<dl>
									<dt>저녁</dt>
									<dd>
										<em>민어 양념찜</em>
									</dd>
									<dd>강낭콩 율무밥</dd>
									<dd>아스파라거스 돈육볶음</dd>
									<dd>실파무침</dd>
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
									<p>강낭콩 율무밥 + 근대국 + 민어 양념찜 + 아스파라거스 돈육볶음 + 실파 무침 + 오이 소박이<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/dinner/rice.jpg" alt="강낭콩 율무밥">
											</div>
											<div class="food_text">
												<p>강낭콩 율무밥</p>
												<p>쌀 45g, 율무 15g, 현미 10g, 강낭콩 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/dinner/main.jpg" alt="민어 양념찜(저녁메인)">
											</div>
											<div class="food_text">
												<p>민어 양념찜(저녁메인)</p>
												<p>닭가슴살 40g, 양파 35g, 청피망 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/dinner/side1.jpg" alt="실파무침">
											</div>
											<div class="food_text">
												<p>실파무침</p>
												<p>실파 70g</p>
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
												<img src="../assets/twoweek/fri/dinner/soup.jpg" alt="근대국">
											</div>
											<div class="food_text">
												<p>근대국</p>
												<p>근대 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/dinner/side2.jpg" alt="아스파라거스 돈육볶음">
											</div>
											<div class="food_text">
												<p>아스파라거스 돈육볶음</p>
												<p>아스파라거스 70g, 돈육 40g, 파프리카 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/twoweek/fri/dinner/side3.jpg" alt="오이 소박이">
											</div>
											<div class="food_text">
												<p>오이 소박이</p>
												<p>오이 소박이 50g</p>
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
  name: "TwoWeek",
};
</script>
