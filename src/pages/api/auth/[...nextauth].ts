import NextAuth from "next-auth";
import { authOptions } from "Tetris/server/auth";

export default NextAuth(authOptions);
