<template>
	<div>
		<div class="week_diet_wrap content">
			<div class="week_diet_top">
				<h3 class="week_diet_title">1주차</h3>
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
										<em>봄동 부추 겉절이</em>
									</dd>
									<dd>현미차조밥</dd>
									<dd>원추리 소고기 장국</dd>
									<dd>계란채소말이</dd>
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
									<p>차조밥 + 원추리 소고기 장국 + 계란 채소말이 + 냉이무침 + 봄동 부추 겉절이 + 깍두기<i class="detail_bar"></i>간식 : 자몽1개, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/rice.png" alt="현미 차조밥">
											</div>
											<div class="food_text">
												<p>현미 차조밥</p>
												<p>쌀 60g, 현미20g, 차조 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/side1.png" alt="계란 채소말이">
											</div>
											<div class="food_text">
												<p>계란 채소말이</p>
												<p>계란 1개, 당근 10g, 양파 10g, 실파 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/side2.png" alt="봄동 부추 겉절이">
											</div>
											<div class="food_text">
												<p>봄동 부추 겉절이</p>
												<p>쌀 60g, 현미20g, 차조 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/dessert1.png" alt="자몽">
											</div>
											<div class="food_text">
												<p>자몽</p>
												<p>150g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/main.png" alt="원추리 소고기 장국">
											</div>
											<div class="food_text">
												<p>원추리 소고기 장국(아침 메인)</p>
												<p>원추리 70g, 소고기 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/side3.png" alt="냉이무침">
											</div>
											<div class="food_text">
												<p>냉이무침</p>
												<p>냉이 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/side4.png" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/morning/dessert2.png" alt="두유">
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
										<em>신곤약 고추 잡채</em>
									</dd>
									<dd>율무밥 & 무채국</dd>
									<dd>달래 소고기 샐러드</dd>
									<dd>신선초 겉절이</dd>
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
									<p>율무밥 + 무채국 + 달래 소고기샐러드 + 실곤약 고추잡채 + 신선초 겉절이 + 백김치<i class="detail_bar"></i>간식 : 플레인 요구르트, 방울토마토</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/rice.png" alt="율무밥">
											</div>
											<div class="food_text">
												<p>율무밥</p>
												<p>쌀 70g, 율무 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/side1.png" alt="달래 소고기 샐러드">
											</div>
											<div class="food_text">
												<p>달래 소고기샐러드</p>
												<p>소안심 40g, 달래 70g, 깻잎 10g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/side2.png" alt="신선초 겉절이">
											</div>
											<div class="food_text">
												<p>신선초 겉절이</p>
												<p>신선초 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/dessert1.png" alt="플레인 요구르트">
											</div>
											<div class="food_text">
												<p>플레인 요구르트</p>
												<p>100g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/soup.png" alt="무채국">
											</div>
											<div class="food_text">
												<p>무채국</p>
												<p>무 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/main.png" alt="실곤약 고추잡채">
											</div>
											<div class="food_text">
												<p>실곤약 고추잡채(아침메인)</p>
												<p>실곤약 35g, 숙주 35g, 청홍고추 각각 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/side3.png" alt="백김치">
											</div>
											<div class="food_text">
												<p>백김치</p>
												<p>백김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/morning/dessert2.png" alt="방울토마토">
											</div>
											<div class="food_text">
												<p>방울토마토</p>
												<p>300g</p>
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
										<em>우엉조림</em>
									</dd>
									<dd>현미밥 & 황태 대파국</dd>
									<dd>애호박 새우나물</dd>
									<dd>돗나물 무침</dd>
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
									<p>현미밥 + 황태 대파국 + 애호박 새우나물 + 우엉조림 + 돗나물무침 + 배추김치<i class="detail_bar"></i>간식 : 체리, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/rice.png" alt="현미밥">
											</div>
											<div class="food_text">
												<p>현미밥</p>
												<p>쌀 70g, 현미 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/main.png" alt="애호박 새우나물">
											</div>
											<div class="food_text">
												<p>애호박 새우나물(아침 메인)</p>
												<p>애호박 70g, 새우살 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/side1.png" alt="돗나물무침">
											</div>
											<div class="food_text">
												<p>돗나물무침</p>
												<p>돗나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/dessert1.png" alt="체리">
											</div>
											<div class="food_text">
												<p>체리</p>
												<p>80g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/soup.png" alt="황태 대파국">
											</div>
											<div class="food_text">
												<p>황태 대파국</p>
												<p>황태 15g, 대파 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/side2.png" alt="새송이 버섯조림(아침 메인)">
											</div>
											<div class="food_text">
												<p>새송이 버섯조림(아침 메인)</p>
												<p>우엉 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/side3.png" alt="배추김치">
											</div>
											<div class="food_text">
												<p>배추김치</p>
												<p>배추김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/morning/rice.png" alt="방울토마토">
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
										<em>새송이 버섯 조림</em>
									</dd>
									<dd>녹두 쌀밥 & 팽이 된장국</dd>
									<dd>연두부 양념장</dd>
									<dd>유채 나물</dd>
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
									<p>녹두 쌀밥 + 팽이 된장국 + 연두부 양념장 + 새송이 버섯조림 + 유채나물 + 백김치<i class="detail_bar"></i>간식 : 머스크멜론, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/rice.png" alt="녹두쌀밥">
											</div>
											<div class="food_text">
												<p>녹두쌀밥</p>
												<p>쌀 70g, 녹두 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/side1.png" alt="연두부 양념장">
											</div>
											<div class="food_text">
												<p>연두부 양념장</p>
												<p>애호박 70g, 새우살 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/side2.png" alt="유채나물">
											</div>
											<div class="food_text">
												<p>유채나물</p>
												<p>유채나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/dessert1.png" alt="머스크멜론">
											</div>
											<div class="food_text">
												<p>머스크멜론</p>
												<p>120g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/soup.png" alt="팽이 된장국">
											</div>
											<div class="food_text">
												<p>팽이 된장국</p>
												<p>팽이 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/main.png" alt="새송이버섯">
											</div>
											<div class="food_text">
												<p>새송이 버섯조림(아침 메인)</p>
												<p>새송이버섯 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/side3.png" alt="백김치">
											</div>
											<div class="food_text">
												<p>백김치</p>
												<p>백김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/morning/dessert2.png" alt="우유">
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
										<em>병어구이</em>
									</dd>
									<dd>흑미 찰밥 & 김치국</dd>
									<dd>아스파라거스 고추장 무침</dd>
									<dd>씀바귀 초무침</dd>
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
									<p>흑미 찰밥 + 김치국 + 병어구이 + 아스파라거스 고추장무침 + 씀바귀 초무침 + 깍두기<i class="detail_bar"></i>간식 : 딸기, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/rice.png" alt="흑미 찰밥">
											</div>
											<div class="food_text">
												<p>흑미 찰밥</p>
												<p>쌀 70g, 녹두 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/main.png" alt="병어구이(아침 메인)">
											</div>
											<div class="food_text">
												<p>병어구이(아침 메인)</p>
												<p>병어 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/side1.png" alt="씀바귀 초무침">
											</div>
											<div class="food_text">
												<p>씀바귀 초무침</p>
												<p>씀바귀 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/dessert1.png" alt="딸기">
											</div>
											<div class="food_text">
												<p>딸기</p>
												<p>150g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/soup.png" alt="김치국">
											</div>
											<div class="food_text">
												<p>김치국</p>
												<p>배추김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/side2.png" alt="아스파라거스">
											</div>
											<div class="food_text">
												<p>아스파라거스 고추장 무침</p>
												<p>아스파라거스 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/side3.png" alt="깍두기">
											</div>
											<div class="food_text">
												<p>깍두기</p>
												<p>깍두기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/morning/dessert2.png" alt="우유">
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
										<em>녹차 수제비</em>
									</dd>
									<dd>두릅초회</dd>
									<dd>데친 두부와 참나물</dd>
									<dd>도라지 볶음</dd>
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
									<p>녹차 수제비 + 두릅 초회 + 데친 두부와 참나물 + 도라지 볶음 + 청경채 김치<i class="detail_bar"></i>간식 : 딸기, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/main.png" alt="녹차수제비">
											</div>
											<div class="food_text">
												<p>녹차수제비(점심 메인)</p>
												<p>밀가루 90g, 녹차0.6g, 바지락 70g, 느타리버섯 10g,  양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/side1.png" alt="두릅 초회">
											</div>
											<div class="food_text">
												<p>두릅 초회</p>
												<p>두릅 70g, 초고추장 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/side2.png" alt="도라지볶음">
											</div>
											<div class="food_text">
												<p>도라지볶음</p>
												<p>도라지 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/dessert1.png" alt="딸기">
											</div>
											<div class="food_text">
												<p>딸기</p>
												<p>150g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/side3.png" alt="데친 두부와 참나물">
											</div>
											<div class="food_text">
												<p>데친 두부와 참나물</p>
												<p>참나물 70g, 두부 80g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/side2.png" alt="청경채 김치">
											</div>
											<div class="food_text">
												<p>청경채 김치</p>
												<p>청경채 김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/dessert2.png" alt="우유">
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
										<em>죽순 양배추롤 전골</em>
									</dd>
									<dd>찹쌀 조밥</dd>
									<dd>닭안심 냉채</dd>
									<dd>풋마늘 초무침</dd>
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
									<p>죽순 양배추롤 전골 + 찹쌀 조밥 + 닭안심 냉채 + 풋마늘 초무침 + 배추김치<i class="detail_bar"></i> 간식 : 바나나, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/lunch/main.png" alt="죽순 양배추롤 전골">
											</div>
											<div class="food_text">
												<p>죽순 양배추롤 전골(점심 메인)</p>
												<p>죽순 70g, 양배추 70g, 소고기 40g, 양파 10g, 당근 10g, 대파 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/lunch/rice.png" alt="찹쌀 조밥">
											</div>
											<div class="food_text">
												<p>찹쌀 조밥</p>
												<p>쌀 40g, 찹쌀 30g, 차조 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/lunch/side1.png" alt="풋마늘 초무침">
											</div>
											<div class="food_text">
												<p>풋마늘 초무침</p>
												<p>풋마늘 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/lunch/dessert1.png" alt="바나나">
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
												<img src="../assets/oneweek/tue/lunch/side2.png" alt="닭안심">
											</div>
											<div class="food_text">
												<p>닭안심 냉채</p>
												<p>닭안심 40g, 오이 15g, 홍피망 15g, 겨자 2g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/lunch/side3.png" alt="배추김치">
											</div>
											<div class="food_text">
												<p>배추김치</p>
												<p>배추김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/dessert2.png" alt="우유">
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
										<em>봄나물 아롱사태 초밥</em>
									</dd>
									<dd>시금치 된장국</dd>
									<dd>숙주 겨자채</dd>
									<dd>곰취 겉절이</dd>
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
									<p>봄나물 아롱사태 초밥 + 시금치 된장국 + 숙주 겨자채 + 곰취 겉절이 + 석박지<i class="detail_bar"></i>간식 : 파인애플, 우유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/lunch/main.png" alt="아롱사태 초밥">
											</div>
											<div class="food_text">
												<p>봄나물 아롱사태 초밥(점심 메인)</p>
												<p>쌀 70g, 현미 20g, 소고기 80g, 봄나물 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/lunch/side1.png" alt="숙주 겨자채">
											</div>
											<div class="food_text">
												<p>숙주 겨자채 </p>
												<p>숙주 70g, 오이 15g, 당근 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/lunch/side2.png" alt="석박지">
											</div>
											<div class="food_text">
												<p>석박지</p>
												<p>석박지 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/lunch/dessert1.png" alt="우유">
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
												<img src="../assets/oneweek/wed/lunch/soup.png" alt="시금치 된장국">
											</div>
											<div class="food_text">
												<p>시금치 된장국</p>
												<p>시금치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/lunch/side3.png" alt="겉절이">
											</div>
											<div class="food_text">
												<p>곰취 겉절이</p>
												<p>곰취 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/lunch/dessert2.png" alt="파인애플">
											</div>
											<div class="food_text">
												<p>파인애플</p>
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
										<em>조기찜</em>
									</dd>
									<dd>오곡밥 & 조개 냉이 토장국</dd>
									<dd>도라지 오이 생채</dd>
									<dd>양배추 쌈</dd>
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
									<p>오곡밥 + 모시조개 냉이 토장국 + 조기찜 + 도라지 오이 생채 + 양배추쌈 + 파김치<i class="detail_bar"></i> 간식 : 플레인 요거트, 키위</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/lunch/rice.png" alt="오곡밥">
											</div>
											<div class="food_text">
												<p>오곡밥</p>
												<p>쌀 40g, 찹쌀 20g, 차조 10g, 차수수 10g, 팥 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/lunch/main.png" alt="숙주 겨자채">
											</div>
											<div class="food_text">
												<p>조기찜(점심 메인) </p>
												<p>조기 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/lunch/side1.png" alt="양배추쌈">
											</div>
											<div class="food_text">
												<p>양배추쌈</p>
												<p>양배추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/lunch/dessert1.png" alt="우유">
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
												<img src="../assets/oneweek/thu/lunch/side2.png" alt="도라지 오이 생채">
											</div>
											<div class="food_text">
												<p>도라지 오이 생채</p>
												<p>도라지 40g, 오이 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/lunch/side3.png" alt="파김치">
											</div>
											<div class="food_text">
												<p>파김치</p>
												<p>파김치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/lunch/dessert2.png" alt="키위">
											</div>
											<div class="food_text">
												<p>키위</p>
												<p>참다래 키위 80g</p>
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
										<em>마늘칩 볶음밥</em>
									</dd>
									<dd>순두부국</dd>
									<dd>쭈꾸미 채소무침</dd>
									<dd>원추리무침</dd>
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
									<p>마늘칩 볶음밥 + 순두부국 + 쭈꾸미 채소무침 + 원추리 무침 + 돗나물 물김치<i class="detail_bar"></i>간식 : 오렌지, 두유</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/main.png" alt="볶음밥">
											</div>
											<div class="food_text">
												<p>마늘칩 볶음밥(점심 메인)</p>
												<p>쌀 90g, 마늘 14g, 청홍피망 각각 20g, 양파 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/side1.png" alt="쭈꾸미 채소무침">
											</div>
											<div class="food_text">
												<p>쭈꾸미 채소무침</p>
												<p>쭈꾸미 100g, 봄동 70g, 깻잎 10g, 양파 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/side2.png" alt="돗나물 물김치">
											</div>
											<div class="food_text">
												<p>돗나물 물김치</p>
												<p>돗나물 물김치 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/dessert1.png" alt="두유">
											</div>
											<div class="food_text">
												<p>두유</p>
												<p>200g</p>
											</div>
										</li>
									</ul>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/soup.png" alt="순두부국">
											</div>
											<div class="food_text">
												<p>순두부국</p>
												<p>순두부 200g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/side3.png" alt="원추리무침">
											</div>
											<div class="food_text">
												<p>원추리무침</p>
												<p>원추리 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/lunch/dessert2.png" alt="오렌지">
											</div>
											<div class="food_text">
												<p>오렌지</p>
												<p>오렌지 100g</p>
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
										<em>브로콜리 통마늘 볶음</em>
									</dd>
									<dd>흑미수수밥</dd>
									<dd>미역국</dd>
									<dd>가자미구이</dd>
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
									<p>흑미 수수밥 + 미역국 + 가자미구이 + 근대나물 + 브로콜리 통마늘볶음 + 배추김치 <i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/dinner/rice.png" alt="흑미 수수밥">
											</div>
											<div class="food_text">
												<p>흑미 수수밥</p>
												<p>쌀 50g, 흑미 20g, 차수수 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/dinner/main.png" alt="가자미구이(저녁 메인)">
											</div>
											<div class="food_text">
												<p>가자미구이(저녁 메인)</p>
												<p>가자미 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/dinner/side1.png" alt="브로콜리 통마늘 볶음">
											</div>
											<div class="food_text">
												<p>브로콜리 통마늘 볶음</p>
												<p>브로콜리 50g, 통마늘 20g</p>
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
												<img src="../assets/oneweek/mon/dinner/soup.png" alt="미역국">
											</div>
											<div class="food_text">
												<p>미역국</p>
												<p>미역 2.5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/dinner/side2.png" alt="근대나물">
											</div>
											<div class="food_text">
												<p>근대나물</p>
												<p>근대 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/mon/dinner/side3.png" alt="배추김치">
											</div>
											<div class="food_text">
												<p>배추김치</p>
												<p>배추김치 50g</p>
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
										<em>삼치 양념구이</em>
									</dd>
									<dd>잡곡밥 & 냉이 맑은국</dd>
									<dd>비름나물 조갯살 무침</dd>
									<dd>무 생강나물</dd>
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
									<p>잡곡밥 + 냉이 맑은국 + 삼치 양념구이 + 바름나물 조갯살무침 + 무 생강나물 + 깍두기<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/dinner/rice.png" alt="잡곡밥">
											</div>
											<div class="food_text">
												<p>잡곡밥</p>
												<p>쌀 70g, 현미 10g, 보리 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/dinner/main.png" alt="삼치 양념구이">
											</div>
											<div class="food_text">
												<p>삼치 양념구이(저녁 메인)</p>
												<p>삼치 50g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/dinner/side1.png" alt="생강나물">
											</div>
											<div class="food_text">
												<p>무 생강나물</p>
												<p>무 70g, 생강 10g</p>
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
												<img src="../assets/oneweek/tue/dinner/soup.png" alt="냉이 맑은국">
											</div>
											<div class="food_text">
												<p>냉이 맑은국</p>
												<p>냉이 70g, 청량고추 5g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/dinner/side2.png" alt="비름나물 조갯살무침">
											</div>
											<div class="food_text">
												<p>비름나물 조갯살무침</p>
												<p>비름 70g, 조개살 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/tue/dinner/side3.png" alt="깍두기">
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
										<em>제육볶음</em>
									</dd>
									<dd>차조밥 & 쑥국</dd>
									<dd>청포묵 무침</dd>
									<dd>생미역 초무침</dd>
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
									<p>차조밥 + 쑥국 + 제육볶음 + 청포묵무침 + 생미역 초무침 + 얼갈이 김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/dinner/rice.png" alt="차조밥">
											</div>
											<div class="food_text">
												<p>차조밥</p>
												<p>쌀 40g, 차조 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/dinner/main.png" alt="제육볶음">
											</div>
											<div class="food_text">
												<p>제육볶음(저녁 메인)</p>
												<p>돈육 40g, 양파 10g, 당근 10g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/dinner/side1.png" alt="생미역 초무침">
											</div>
											<div class="food_text">
												<p>생미역 초무침</p>
												<p>생미역 70g, 양파 10g</p>
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
												<img src="../assets/oneweek/wed/dinner/soup.png" alt="쑥국">
											</div>
											<div class="food_text">
												<p>쑥국</p>
												<p>쑥 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/dinner/side2.png" alt="청포묵무침">
											</div>
											<div class="food_text">
												<p>청포묵무침</p>
												<p>녹두묵 100g, 당근 5g, 오이 5g, 건표고버섯 7g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/wed/dinner/side3.png" alt="얼갈이 김치">
											</div>
											<div class="food_text">
												<p>얼갈이 김치</p>
												<p>얼갈이 김치 50g</p>
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
										<em>소고기 너비아니</em>
									</dd>
									<dd>율무 쌀밥 & 배추속대국</dd>
									<dd>베이비채소 비빔</dd>
									<dd>달래무침</dd>
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
									<p>율무쌀밥 + 배추속대국 + 소고기 너비아니 + 베이비채소 비빔 + 달래무침 + 알타리 김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/dinner/rice.png" alt="율무 쌀밥">
											</div>
											<div class="food_text">
												<p>율무 쌀밥</p>
												<p>쌀 60g, 율무 20g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/dinner/main.png" alt="소고기 너비아니">
											</div>
											<div class="food_text">
												<p>소고기 너비아니(저녁 메인)</p>
												<p>소고기 80g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/dinner/side1.png" alt="달래무침">
											</div>
											<div class="food_text">
												<p>달래무침</p>
												<p>달래 70g, 양파 20g</p>
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
												<img src="../assets/oneweek/thu/dinner/soup.png" alt="배추속대국">
											</div>
											<div class="food_text">
												<p>배추속대국</p>
												<p>배추속대 40g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/dinner/side2.png" alt="베이비채소 비빔">
											</div>
											<div class="food_text">
												<p>베이비채소 비빔</p>
												<p>베이비채소 70g, 발사믹드레싱 15g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/thu/dinner/side3.png" alt="얼갈이 김치">
											</div>
											<div class="food_text">
												<p>얼갈이 김치</p>
												<p>얼갈이 김치 50g</p>
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
										<em>닭가슴살 양파볶음</em>
									</dd>
									<dd>현미 쌀밥</dd>
									<dd>소고기 햇고사리국</dd>
									<dd>쑥갓 양상추무침</dd>
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
									<p>현미 쌀밥 + 소고기 햇고사리국 + 닭가슴살 양파볶음 + 쑥갓 양상추무침 + 돌미나리무침 + 배추김치<i class="detail_bar"></i>간식없음</p>
									<ul class="food_list">
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/dinner/rice.png" alt="율무 쌀밥">
											</div>
											<div class="food_text">
												<p>현미 쌀밥</p>
												<p>쌀 60g, 현미 30g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/dinner/main.png" alt="닭가슴살 양파볶음">
											</div>
											<div class="food_text">
												<p>닭가슴살 양파볶음(저녁 메인)</p>
												<p>닭가슴살 40g, 양파 35g, 청피망 35g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/dinner/side1.png" alt="돌미나리무침">
											</div>
											<div class="food_text">
												<p>돌미나리무침</p>
												<p>돌미나리 70g</p>
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
												<img src="../assets/oneweek/fri/dinner/soup.png" alt="소고기 햇고사리국">
											</div>
											<div class="food_text">
												<p>소고기 햇고사리국</p>
												<p>소고기 40g, 고사리 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/dinner/side2.png" alt="쑥갓 양상추무침">
											</div>
											<div class="food_text">
												<p>쑥갓 양상추무침</p>
												<p>쑥갓 35g, 양상추 70g</p>
											</div>
										</li>
										<li>
											<div class="food_img">
												<img src="../assets/oneweek/fri/dinner/side3.png" alt="배추김치">
											</div>
											<div class="food_text">
												<p>배추김치</p>
												<p>배추김치 50g</p>
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
  name: "OneWeek",
};
</script>
