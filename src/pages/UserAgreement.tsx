import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UserAgreement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 prose prose-slate max-w-none dark:prose-invert">
        <h1>Пользовательское соглашение</h1>

        <p>
          Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между
          Администрацией сайта «ВидеоНаблюдение34» (ИП Петров П.П., ИНН 1234567890) и физическим
          лицом (далее — Пользователь) по использованию сайта videonablydenie34.ru.
        </p>

        <h2>1. Общие положения</h2>
        <p>
          1.1. Используя сайт, Пользователь подтверждает, что прочитал, понял и принял условия
          Соглашения в полном объёме без каких-либо исключений и оговорок.
        </p>
        <p>
          1.2. Если Пользователь не согласен с условиями Соглашения, он обязан немедленно прекратить
          использование сайта.
        </p>

        <h2>2. Предмет соглашения</h2>
        <p>
          2.1. Администрация предоставляет Пользователю доступ к информационным материалам и услугам,
          размещённым на сайте.
        </p>

        <h2>3. Права и обязанности сторон</h2>
        <h3>3.1. Пользователь вправе:</h3>
        <ul>
          <li>получать информацию о продуктах и услугах, размещённых на сайте;</li>
          <li>использовать формы обратной связи для направления запросов и заявок;</li>
          <li>копировать информацию с сайта в некоммерческих целях с указанием источника.</li>
        </ul>

        <h3>3.2. Пользователь обязуется:</h3>
        <ul>
          <li>не нарушать работоспособность сайта;</li>
          <li>не размещать информацию, нарушающую законодательство РФ и права третьих лиц;</li>
          <li>не использовать данные сайта в коммерческих целях без письменного разрешения
            Администрации.</li>
        </ul>

        <h3>3.3. Администрация вправе:</h3>
        <ul>
          <li>изменять содержание сайта без согласия Пользователя;</li>
          <li>ограничить доступ Пользователя к сайту при нарушении им условий Соглашения;</li>
          <li>собирать и обрабатывать обезличенные статистические данные.</li>
        </ul>

        <h3>3.4. Администрация обязуется:</h3>
        <ul>
          <li>поддерживать работоспособность сайта за исключением случаев, зависящих от третьих лиц;</li>
          <li>обеспечивать конфиденциальность персональных данных Пользователя в соответствии с
            Политикой конфиденциальности;</li>
          <li>рассматривать обращения и заявки Пользователей в разумные сроки.</li>
        </ul>

        <h2>4. Ограничение ответственности</h2>
        <p>
          4.1. Все материалы и услуги сайта предоставляются «как есть» без гарантий какого-либо рода.
        </p>
        <p>
          4.2. Администрация не несёт ответственности за убытки Пользователя, возникшие вследствие
          использования сайта или невозможности его использования.
        </p>

        <h2>5. Заключительные положения</h2>
        <p>
          5.1. Администрация вправе в любое время изменять условия Соглашения. Изменения вступают в
          силу с момента опубликования новой редакции на сайте.
        </p>
        <p>
          5.2. К настоящему Соглашению и отношениям сторон применяется право Российской Федерации.
        </p>

        <h2>Контакты</h2>
        <p>
          Электронная почта: info@videonablydenie34.ru
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default UserAgreement;