{/* 3. Real Report Mockup & Live Chat */}
      <section className="py-20 md:py-32 bg-brand-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left: Stacked Report Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="text-left mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">압도적으로 상세한<br/>나란히 안심 리포트</h2>
              <p className="text-white/80 text-lg break-keep">단순한 요약이 아닙니다. 진료 결과부터 어르신의 세밀한 감정 변화까지, 여러 장에 걸쳐 꼼꼼하게 기록하여 전송해 드립니다.</p>
            </div>
            
            <div className="relative pt-12 pb-12 w-full max-w-[380px] mx-auto lg:mx-0 h-[700px]">
              {/* Layer 3 (Bottom/Back) */}
              <div className="absolute top-0 left-6 right-2 bottom-20 bg-white rounded-xl shadow-lg p-5 border border-gray-200 rotate-[5deg] opacity-70 origin-bottom-right">
                <div className="border-b-2 border-brand-blue pb-3 mb-4 flex justify-between items-end">
                  <h3 className="text-lg font-bold text-brand-blue">[나란히 동행] 안심 리포트</h3>
                </div>
                 <div className="space-y-4 text-gray-400 blur-[1px]">
                   <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                   <div className="h-3 bg-gray-100 rounded w-full"></div>
                   <div className="h-3 bg-gray-100 rounded w-full"></div>
                 </div>
              </div>

              {/* Layer 2 (Middle) - Doctor's Opinion */}
              <div className="absolute top-4 left-0 right-8 bottom-12 bg-white rounded-xl shadow-xl p-5 border border-gray-200 -rotate-[2deg] opacity-95">
                 <h4 className="flex items-center gap-2 font-bold text-brand-blue mb-3 text-[15px]">
                   <div className="w-1.5 h-1.5 rotate-45 bg-brand-green"></div>
                   진료 결과 및 의사 소견
                 </h4>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-2 text-gray-700 text-[12px] leading-relaxed break-keep">
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• PET-CT 검사 결과 분석:</strong>
                      지난번 촬영하신 PET-CT 결과, 이전의 병변은 깨끗하게 제거되었으며 타 장기나 부위로의 전이는 전혀 없다는 기쁜 소식을 확인했습니다.
                    </p>
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• 혈액 검사 및 영양 상태:</strong>
                      백혈구 및 호중구 수치가 지난번보다 안정적으로 회복되었습니다. 면역력 관리를 위해 단백질 위주의 식단을 유지하시길 권장하셨습니다.
                    </p>
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• 향후 항암 치료 방향:</strong>
                      잔여 항암 차수 일정은 계획대로 차질 없이 모두 완주해야 함을 주치의 선생님께서 재차 강조하셨습니다.
                    </p>
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• 부작용 및 신체 변화 전달:</strong>
                      식욕 부진, 오심, 손발 저림, 그리고 기력 저하 증상에 대해 진료실에서 상세히 설명해 드렸습니다.
                    </p>
                 </div>
              </div>

              {/* Layer 1 (Top/Front) - Message to Guardian */}
              <div className="absolute top-[130px] left-6 right-0 bottom-0 z-10 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 md:p-6 border border-gray-100 flex flex-col">
                <div className="border-b-2 border-brand-blue pb-3 mb-4 flex justify-between items-end">
                  <h3 className="text-lg md:text-xl font-bold text-brand-blue">[나란히 동행] 안심 리포트</h3>
                  <img src="/logo.jpg" alt="로고" className="h-5 md:h-6 object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-xs border border-gray-100 mb-4">
                  <span className="text-gray-500">이용자 성함: <strong className="text-gray-900">최영재</strong></span>
                  <span className="text-gray-500">담당 매니저: <strong className="text-gray-900">김미라</strong></span>
                </div>

                <div className="flex flex-col flex-grow relative overflow-hidden">
                  <h4 className="flex items-center gap-2 font-bold text-brand-blue mb-3 text-[15px] flex-shrink-0">
                    <div className="w-2 h-2 rotate-45 bg-brand-green"></div>
                    보호자님께 드리는 메시지
                  </h4>
                  <div className="relative flex-grow bg-brand-pink/5 rounded-xl border border-brand-pink/20 shadow-inner overflow-hidden">
                    <div className="absolute inset-0 p-4 text-gray-800 text-[12.5px] leading-[1.7] break-keep overflow-y-auto no-scrollbar pb-8">
                      보호자님, 오늘 병원길도 아버님과 안전하게 잘 다녀왔습니다.<br/><br/>
                      요즘 항암 치료 과정에서 기력이 많이 떨어지셔서 오늘은 휠체어로 이동을 도와드렸습니다. 병원에서 대기하는 동안 어르신께서 "내가 이렇게 기운이 없어서 치료가 잘 되고 있는 건지..." 하시며 회복과 전이에 대한 불안한 마음을 살짝 내비치셨어요.<br/><br/>
                      하지만 진료실에서 주치의 선생님이 "PET-CT 결과 병변도 없어졌고 전이도 없이 아주 잘 견디고 계신다"고 확답을 주시자, 어르신의 어두웠던 표정이 순간 환하게 밝아지셨습니다! 진료를 마치고 나오는 길에 "매니저 양반, 오늘은 내가 기분이 좋으니 갈비탕이라도 한 그릇 묵고 가자"고 먼저 말씀하셔서 병원 근처 식당에서 따뜻하게 식사도 챙겨 드렸습니다.<br/><br/>
                      식사량도 평소보다 늘으셨고, 댁에 모셔다 드릴 때에는 엘리베이터 앞에서 저에게 손까지 흔들어 주셨어요. 오늘 하루 아버님의 감정 변화와 컨디션 회복 과정을 옆에서 지켜볼 수 있어 저도 참 뿌듯한 하루였습니다. 남은 주말 편안하게 보내시고, 다음 주 2차 항암 일정 때 다시 뵙겠습니다!
                    </div>
                    {/* Natural fade out at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#fdfafb] to-transparent pointer-events-none rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-blue-dark/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4 mt-6">
               <FileCheck className="w-8 h-8 text-brand-pink flex-shrink-0" />
               <p className="text-sm md:text-base text-white/90 leading-relaxed">
                 * 나란히의 모든 안심 리포트는 <strong className="text-brand-pink">개인정보보호법을 철저히 준수</strong>하며, 사전 동의를 받은 보호자 및 지정된 가족에게만 1:1로 안전하게 전송됩니다.
               </p>
            </div>
          </motion.div>

          {/* Right: Live Chat Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="text-left mb-2 md:mb-6 lg:mt-0 mt-8">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">진행 상황 실시간 보고</h2>
              <p className="text-white/80 text-lg break-keep">걱정하며 기다리실 보호자님을 위해, 동행 중간중간 실시간으로 상황을 공유해 드립니다.</p>
            </div>

            {/* Kakao UI Phone Mockup */}
            <div className="w-full max-w-[380px] mx-auto bg-[#b2c7d9] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-gray-900 relative">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20"></div>
              
              {/* Mock Header */}
              <div className="bg-[#a9bdce] px-6 pt-10 pb-4 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src="/logo.jpg" alt="나란히" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg leading-tight">나란히 정나리 매니저</h4>
                  <span className="text-gray-600 text-xs flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> 동행 진행 중
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-5 flex flex-col gap-4 h-[500px] overflow-y-auto no-scrollbar pb-10 relative">
                
                {/* Fade top effect */}
                <div className="sticky top-0 left-0 w-full h-8 bg-gradient-to-b from-[#b2c7d9] to-transparent z-10 -mt-5 -mx-5 px-5"></div>

                {/* Previous User Message (Cut off) */}
                <div className="flex items-end justify-end gap-1 -mt-2 opacity-60">
                  <span className="text-[10px] text-gray-500 mb-1">오전 9:30</span>
                  <div className="bg-[#FEE500] p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[75%] text-gray-900 text-[14px] leading-relaxed break-keep">
                    네 매니저님! 오늘도 우리 엄마 잘 부탁드릴게요. 조심히 다녀오세요~
                  </div>
                </div>

                {/* Manager Message 1 */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src="/logo.jpg" alt="나란히" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex flex-col gap-1 max-w-[75%]">
                    <span className="text-gray-700 text-xs font-medium ml-1">매니저</span>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm text-gray-800 text-[14px] leading-relaxed break-keep">
                      보호자님, 어머님 모시고 정형외과 도착해서 방금 엑스레이 찍고 진료 대기 중입니다 😊
                    </div>
                    <span className="text-[10px] text-gray-500 ml-1">오전 10:15</span>
                  </div>
                </div>

                {/* User Reply 1 */}
                <div className="flex items-end justify-end gap-1 mt-1">
                  <span className="text-[10px] text-gray-500 mb-1">오전 10:18</span>
                  <div className="bg-[#FEE500] p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[75%] text-gray-900 text-[14px] leading-relaxed break-keep">
                    네 매니저님 감사합니다 ㅠㅠ 엄마가 팔 많이 불편해하시진 않나요?
                  </div>
                </div>

                {/* Manager Message 2 */}
                <div className="flex items-start gap-2 mt-2">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src="/logo.jpg" alt="나란히" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex flex-col gap-1 max-w-[75%]">
                    <span className="text-gray-700 text-xs font-medium ml-1">매니저</span>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm text-gray-800 text-[14px] leading-relaxed break-keep">
                      아무래도 계속 고정시켜두다 보니 답답하고 불편해하시네요 ㅠㅠ 방금 진료 마쳤는데, 아직 뼈가 완전하게 붙지는 않아서 시간이 조금 더 필요하다고 하십니다.
                    </div>
                  </div>
                </div>

                {/* Manager Message 3 */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 flex-shrink-0"></div>
                  <div className="flex flex-col gap-1 max-w-[75%]">
                    <div className="bg-white p-3 rounded-2xl shadow-sm text-gray-800 text-[14px] leading-relaxed break-keep">
                      그리고 이제는 암슬링으로 바꿔서 계속 착용하고 계셔야 한다고 하네요! 변경된 주의사항과 다음 일정은 동행 마치고 안심리포트에 더 자세히 적어서 보내드릴게요!
                    </div>
                    <span className="text-[10px] text-gray-500 ml-1">오전 11:45</span>
                  </div>
                </div>

                {/* User Reply 2 */}
                <div className="flex items-end justify-end gap-1 mt-1">
                  <span className="text-[10px] text-gray-500 mb-1">오전 11:47</span>
                  <div className="bg-[#FEE500] p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[75%] text-gray-900 text-[14px] leading-relaxed break-keep">
                    네네 암슬링으로 바꿔야 하는군요! 아까 전화로 직접 설명해주셔서 너무 안심됐어요. 오늘 하루도 정말 고생 많으셨습니다!!
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>