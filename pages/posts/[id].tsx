import {useSelector} from 'react-redux';

const Post = (something) => {

    const {title, text, subtitle} = something
    return (
        <div className="home_main">
            <div className="article_content">
                <div className="article_content_text">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>

                    {text && <div dangerouslySetInnerHTML={{__html: text}}></div>}
                    <h3 className="article_content_comments">Comments</h3>

                    <div id="commento"></div>
                </div>

            </div>
        </div>
    );
};

Post.getInitialProps = async ({apolloClient, store, query}) => {
    const {id} = query;
    return {};
};

export default Post;
