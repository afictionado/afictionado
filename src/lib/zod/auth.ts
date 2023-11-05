import { z } from "zod";

export const emailSchema = z
	.string()
	.email("Boy, I'm tech-illiterate but I sure have never seen an email like this...")
	.min(5, "What kind of frugal character-saving email is this!?");

export const passwordSchema = z
	.string()
	.min(8, "Your password's gotta be longer than that! The thieves have big hands.")
	.regex(
		/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
		"Sure, 8 characters and at least one letter and one number is a bit much but I wouldn't say it's unreasonable..."
	);

export const signupDataSchema = z
	.object({
		email: emailSchema,
		password: passwordSchema,
		confirmPassword: z.string()
	})
	.superRefine(({ password, confirmPassword }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: "custom",
				message: "These passwords don't match... You sure you got your password down?"
			});
		}
	});

export const loginDataSchema = z.object({
	email: emailSchema,
	password: passwordSchema
});
