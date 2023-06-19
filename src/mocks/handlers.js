import { rest } from "msw"

const baseURL = "https://localdrfapi.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res
          (ctx.json({
             pk: 3,
             username: "saranohemy",
             email: "",
             first_name: "",
             last_name: "",
             profile_id: 3,
             profile_image: 
               "https://res.cloudinary.com/dvvr7cpfs/image/upload/v1/media/images/20230105_15110221_s15l7v"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];