import './index.css';

  const OurMenu = () => {
  return (
<>
<div className="bgimg">
  <div className="menu-sheet container grid">
    <section className="container grid our-menu">       
      <div className='w-[80%] lg:w-[40%] mx-7 my-3'>
        <h2 class="text-2xl font-semibold text-green-700 border-b border-green-200 pb-2 mb-4">Appetizers</h2>
      <ul class="space-y-4">
        <li class="flex justify-between">
          <span>Hummus with Pita</span>
          <span class="font-semibold">$6</span>
        </li>
        <li class="flex justify-between">
          <span>Dolmas (Stuffed Grape Leaves)</span>
          <span class="font-semibold">$7</span>
        </li>
        <li class="flex justify-between">
          <span>Spanakopita</span>
          <span class="font-semibold">$8</span>
        </li>
      </ul>
      </div>

      <div className='our-menu-img'>
        <h2 class="text-2xl font-semibold text-green-700 border-b border-green-200 pb-2 mb-4">Drinks</h2>
      <ul class="space-y-4">
        <li class="flex justify-between">
          <span>Red Wine (Glass)</span>
          <span class="font-semibold">$8</span>
        </li>
        <li class="flex justify-between">
          <span>Ouzo</span>
          <span class="font-semibold">$9</span>
        </li>
        <li class="flex justify-between">
          <span>Mythos Beer</span>
          <span class="font-semibold">$7</span>
        </li>
      </ul>
      </div>
    </section>

    <section className="container grid our-menu">  
    <div className='w-[80%] lg:w-[40%] mx-7 my-3'>       
      <h2 class="text-2xl font-semibold text-green-700 border-b border-green-200 pb-2 mb-4">Lunch</h2>
      <ul class="space-y-4">
        <li class="flex justify-between">
          <span>Chicken Souvlaki Wrap</span>
          <span class="font-semibold">$12</span>
        </li>
        <li class="flex justify-between">
          <span>Greek Salad with Feta</span>
          <span class="font-semibold">$10</span>
        </li>
        <li class="flex justify-between">
          <span>Falafel Bowl</span>
          <span class="font-semibold">$11</span>
        </li>
      </ul>
      </div>

      <div className='our-menu-img'>
        <h2 class="text-2xl font-semibold text-green-700 border-b border-green-200 pb-2 mb-4">Dinner</h2>
      <ul class="space-y-4">
        <li class="flex justify-between">
          <span>Lamb Kofta with Couscous</span>
          <span class="font-semibold">$18</span>
        </li>
        <li class="flex justify-between">
          <span>Grilled Sea Bass with Lemon</span>
          <span class="font-semibold">$22</span>
        </li>
        <li class="flex justify-between">
          <span>Vegetarian Moussaka</span>
          <span class="font-semibold">$17</span>
        </li>
      </ul>
      </div>
    </section>

    <section className="container grid our-menu">  
    <div className='w-[80%] lg:w-[40%] mx-7 my-3'>       
      <h2 class="text-2xl font-semibold text-green-700 border-b border-green-200 pb-2 mb-4">Desserts</h2>
      <ul class="space-y-4">
        <li class="flex justify-between">
          <span>Baklava</span>
          <span class="font-semibold">$6</span>
        </li>
        <li class="flex justify-between">
          <span>Honey Yogurt with Walnuts</span>
          <span class="font-semibold">$5</span>
        </li>
        <li class="flex justify-between">
          <span>Orange Olive Oil Cake</span>
          <span class="font-semibold">$7</span>
        </li>
      </ul>
      </div>

      <div className='thank-you'>
        <h2 class="text-2xl font-semibold text-green-700 border-b border-green-200 pb-2 mb-4">Thank you for visiting!
        </h2>
      <p>We hope to see you again soon</p>
      </div>
    </section>
</div>
</div>
</>
  )
}

export default OurMenu;
