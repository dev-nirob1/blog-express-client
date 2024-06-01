import { Link } from "react-router-dom";

const Details = () => {
    return (
        <div className="border p-5 mt-5 rounded">
            <h1 className="text-3xl font-semibold">this is a title of blog</h1>
            <div className="my-5">
                <Link to={"/author/nirob10925"} className="flex items-center justify-start gap-3 mb-3 group">

                    <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                        {/* todo:replce with a image */}
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        <p className='group-hover:underline'>Al Hasan</p>
                        <p className='group-hover:underline'>August 20, 2022</p>
                    </div>
                </Link>
            </div>
            <div>
                {/* banner image  */}
                <img src="/banner.jpg" alt="banner" />
                <div className="mt-8">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quis nostrum dignissimos repellendus possimus neque est, ipsum nobis ex, dolor modi minus tenetur pariatur nihil itaque, inventore consequuntur id. Tenetur nisi quae asperiores expedita fugiat cum odio voluptatem est, tempore suscipit velit atque quasi et accusantium distinctio doloremque beatae! Autem architecto fugit exercitationem obcaecati non fuga libero inventore quod laboriosam ut facilis aut eius sed consectetur sequi facere excepturi expedita, vero optio nobis iusto, vel voluptatem voluptate eos! Tempore non dolorem quia, blanditiis voluptatum ipsa odit fugit illo sed aut, iste numquam alias maiores ullam quisquam animi cumque! Provident repellendus illo neque eius molestiae ipsam tempore tempora saepe tenetur ea modi unde, officiis veniam dolorem, magnam exercitationem quisquam doloremque veritatis numquam maxime sed. Culpa dolore provident necessitatibus ipsam reprehenderit rerum hic voluptates esse vel? Iure deleniti rem nisi voluptas eveniet reprehenderit minima doloremque autem harum dolores, ipsa omnis! Iste expedita dicta totam illo quod eligendi repellendus labore quae beatae nisi amet autem facere eos doloribus blanditiis, porro laudantium dolores ab odit praesentium repellat reprehenderit possimus, tenetur eum! Laudantium, recusandae deserunt, vero perferendis iure voluptatem magni fuga hic corrupti quas quos consequatur quibusdam quia soluta repellendus nisi! Sapiente omnis, pariatur totam ipsam, expedita maiores, fugiat natus ipsa quaerat modi quas maxime eum explicabo saepe qui dolore laudantium perspiciatis beatae excepturi mollitia laborum quibusdam. Eos, neque, nulla exercitationem, corporis quia maxime sapiente molestias quidem dolore alias aliquid sunt blanditiis expedita quas dicta voluptatum quos ratione animi sed non adipisci veritatis? Nulla animi voluptatum quaerat ea. Quae, deserunt. Maxime aliquid veniam culpa debitis eveniet quia ratione dicta hic magnam, earum quaerat quas deserunt. Voluptatem voluptatum quis laboriosam maxime cupiditate architecto deserunt repellat alias, sapiente blanditiis nobis ex ad enim tempora necessitatibus fugiat ipsa fugit iure veritatis. Ipsa autem aliquam natus obcaecati incidunt recusandae repudiandae fugiat, quia quaerat nesciunt cum quisquam. Id molestias molestiae in consequuntur enim harum officia provident ad perspiciatis qui perferendis recusandae, nihil animi assumenda. Assumenda repellendus, temporibus qui ea consequatur dicta voluptates a et dolorem. Nesciunt accusantium enim explicabo eius esse aliquid velit error, voluptate delectus voluptatum dolores culpa? Quam adipisci est praesentium asperiores minima veritatis, doloribus eligendi nemo repellendus iure soluta, tempore excepturi. Blanditiis a voluptatibus natus sit alias! Natus molestiae alias autem dolore fugiat velit vel, ut repellendus culpa quaerat nulla explicabo obcaecati possimus voluptatibus error saepe quis excepturi suscipit! Praesentium facere tenetur iure. Cupiditate sed voluptatum assumenda commodi. Suscipit, adipisci ex voluptatum nisi, esse doloribus et maxime eius sint deleniti quaerat quis. Amet tenetur reiciendis, quasi doloremque reprehenderit odio atque omnis beatae tempore numquam qui, corrupti minus esse voluptates quod. Rerum in sed harum, natus, labore hic, expedita atque eos amet odit fuga nulla excepturi quia esse ducimus eveniet itaque assumenda accusantium dolorum adipisci iste reiciendis? Atque officia alias autem molestias dignissimos consequatur. Distinctio velit ut fugiat nemo magnam ipsam ratione delectus nisi voluptatibus quae, necessitatibus ullam rerum reprehenderit esse odit doloremque. Consectetur quas alias debitis blanditiis, cum labore voluptate eveniet nisi magnam molestiae reiciendis tempora consequuntur?</p>
                </div>
            </div>
        </div>
    );
};

export default Details;