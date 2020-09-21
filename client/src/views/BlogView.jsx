import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const BlogView = () => {
  return (
    <div>
      <div>
        <div className="triangle-left move"></div>
        <div className="banner banner-2">
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img className="header-logo" src={Logo} alt="aayam-logo" />
              </Link>
            </div>
          </div>

          <div className="content">
            <p className="title-text">Title Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="dash"></div>
        </div>

        <div className="d-container">
          <div className="d-img">
            <LazyLoadImage
              alt={"banner"}
              effect={"opacity"}
              width={"100%"}
              height={"60vh"}
              className="d-image"
              src={"https://via.placeholder.com/1280x720"}
            />
          </div>

          <div className="d-content">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              excepturi nobis nisi ut, delectus recusandae fugiat aliquid beatae
              expedita dolor quis alias rerum, tempore blanditiis quasi
              inventore odio! Nulla, ad. lorem Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Fuga, ea corporis consectetur cum
              architecto soluta est suscipit facere quaerat quasi expedita!
              Provident hic, magnam a saepe laudantium repudiandae eius
              sunt?Illum, ad ab rem aut corporis dolor ea soluta tempora hic
              esse explicabo. Laudantium quasi doloribus temporibus eveniet fuga
              excepturi veniam magnam maxime facilis ad quam eos, reiciendis
              provident tenetur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad rem facilis totam natus delectus. In
              consequatur ipsa voluptatem commodi odio, possimus sit? Autem
              similique illo at sit ipsum id possimus? Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Libero labore recusandae
              voluptates soluta, expedita numquam minus non voluptatum suscipit
              necessitatibus optio harum fugit in aliquid fuga similique nam
              animi? Voluptates. Recusandae optio pariatur totam magni labore.
              Cumque, maiores? Aliquam tenetur maiores magni, eos, iusto earum
              alias, architecto libero atque perspiciatis accusamus aperiam.
              Omnis nisi voluptas facere officia, tenetur eius assumenda. Ea
              vel, asperiores deleniti fuga excepturi, porro fugit consequatur
              nobis magni impedit ex, possimus animi! Incidunt culpa possimus
              consectetur harum nostrum. Voluptate quod corporis est modi saepe
              laborum eveniet? Totam? Laborum ab in unde vitae placeat nisi
              perferendis beatae. Facilis, recusandae iusto. Explicabo ea culpa
              reprehenderit. Assumenda, suscipit quidem, mollitia dicta
              obcaecati harum perferendis est quam distinctio optio sapiente
              vel. Accusamus, repellat iure impedit officia quidem, inventore
              maiores totam alias velit nobis a magni assumenda porro. Rem ex
              dolores, dolor placeat ipsa iure a, perferendis, corporis quaerat
              omnis velit similique?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
