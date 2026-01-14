import type { BotType } from "./bot";

type CommandContext = Parameters<Parameters<BotType["command"]>[1]>[0];

export interface CommandSpecification {
	get name(): string;
	get description(): string;
	command(context: CommandContext): Promise<unknown>;
}
