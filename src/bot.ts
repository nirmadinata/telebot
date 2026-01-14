import { autoRetry } from "@gramio/auto-retry";
import { Bot } from "gramio";
import { config } from "./config.ts";

export const bot = new Bot(config.BOT_TOKEN)
	.extend(autoRetry())
	.onStart(({ info }) => {
		console.log(`✨ Bot ${info.username} was started!`);
	});

export type BotType = typeof bot;
