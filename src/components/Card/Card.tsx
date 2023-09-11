import React from "react";
import "./Card.css"
import { Usercontextprops } from "../../context/backgrondContext";
import { Userprops } from "../../type/user";

export function Card({avatar_url, login, name, company, blog, location, bio, public_repos, followers, following, created_at, twitter_username}: Userprops) {

    const {card, boxdashboard} = Usercontextprops()
    return (
        <div>
            <div className={card} id="container_card">
                <div className="card_img">
                    <img src={avatar_url} alt={name} />
                    <div className="nick_mobile">
                            <h1>{name != null ? name : "Not name"}</h1>
                            <p>{login}</p>
                            <p>{created_at}</p>
                    </div>
                </div>
                {
                    //no caso teremos um container ROW que tera a imagem e os outros cards do lado com todos os dados do usuario
                }
                <div className="card_info">
                    {
                        //tera todos os conteudo do lado direito do card sera agrupado aqui
                    }
                    <div className="box_nick">
                        <div className="nick">
                            <h1>{name != null ? name : "Not name"}</h1>
                            <p>{created_at}</p>
                        </div>
                        <div className="nickname">
                        <p>{login}</p>
                        </div>
                    </div>
                    <div className="box_bio">
                        <p>{bio != null ? bio : "Not bio"}</p>
                    </div>

                    {
                        //tera informações do usuario como follow 
                    }
                    <div id="card_deshibord_repositorio" className={boxdashboard}>
                        <div>
                            <h3>Repos</h3>
                            <p><strong>{public_repos}</strong></p>
                        </div>
                        <div>
                            <h3>Followers</h3>
                            <p><strong>{followers}</strong></p>
                        </div>
                        <div>
                            <h3>Following</h3>
                            <p><strong>{following}</strong></p>
                        </div>
                    </div>
                    {
                        //parte de informações onde mora e se tem site e etc...
                    }
                    <div className="box_links_redes">
                        <div>
                            {
                                location != null ? <p>{location}</p> : <p>Not Location</p>
                            }
                            {
                                blog != null ? <a href={blog} target="_blank" title={`link do blog ${name}`}>Blog</a> : <p>Not Blog</p>
                            }
                        </div>
                        <div>
                            <p>{}</p>
                            {
                                twitter_username != null ? <a href={twitter_username} target="_blank" title={`twitter de ${name}`}>Twitter</a> : <p>Not Twitter</p>
                            }
                            <p>{company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;