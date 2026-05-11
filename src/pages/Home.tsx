export default function Home() {
  return (
    <div className="w-full">
      <section className="py-20 bg-white text-center">
        <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">
          나란히동행
        </h1>
        <p className="text-xl text-gray-600">
          부산·경남 병원동행 및 어르신 일상동행 서비스
        </p>
      </section>

      <section className="py-10 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">병원 동행</h3>
            <p className="text-gray-500 text-sm">진료 접수부터 수납까지</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">일상 외출</h3>
            <p className="text-gray-500 text-sm">관공서 및 나들이 동행</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">1인가구 지원</h3>
            <p className="text-gray-500 text-sm">가족같은 든든한 동반자</p>
          </div>
        </div>
      </section>
    </div>
  );
}