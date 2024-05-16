import { dev } from "$app/environment";
import { userService } from "$lib/services/user-service";
import { redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attemting to log in email: ${email} with password: ${password}`);
      const session = await userService.login(email, password);

      if (session) {
        const userJson = JSON.stringify(session);
        cookies.set("hotel-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7 // one week
        });
        throw redirect(303, "/dashboard");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};