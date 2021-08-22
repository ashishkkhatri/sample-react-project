/*
 * *********************************
 *  * Copyright © 2020 Ambikaprasad Khatri. All Rights Reserved.
 *  * 
 *  * NOTICE:  All information contained herein is, and remains the property of Ambikaprasad Khatri. 
 *  * The intellectual and technical concepts contained herein are proprietary to Ambikaprasad Khatri 
 *  * and are protected by trade secret or copyright law. Dissemination of this information or 
 *  * reproduction of this material is strictly forbidden unless prior written permission is obtained
 *  * from Ambikaprasad Khatri.
 *  *********************************
 */

import {Helmet} from "react-helmet";

const FirstPost = () => {
  return (<div><p>This is First Post.</p>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="This is First Post Page." />
                <title>First Post</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet></div>);
};

export default FirstPost;