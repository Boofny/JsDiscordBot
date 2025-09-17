import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
//import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.requests.GatewayIntent;
import org.jetbrains.annotations.NotNull;

import javax.security.auth.login.LoginException;

public class Main {
    public static void main(String[] args) throws LoginException {
        showkey key = new showkey();

        JDABuilder builder = JDABuilder.createDefault(key.getApiKey());

//         Enable message content intent
        builder.enableIntents(GatewayIntent.MESSAGE_CONTENT);

        builder.setActivity(Activity.playing("with my worm"));
        builder.addEventListeners(new MyBotListener());

        // Build the bot instance
        builder.build();
    }
}

class MyBotListener extends ListenerAdapter {
    @Override
    public void onMessageReceived(@NotNull MessageReceivedEvent event) {
        if (event.getAuthor().isBot()) return;

        String msg = event.getMessage().getContentRaw().trim();

        // Respond if the message is !hello
        if (msg.equalsIgnoreCase("!hello")) {
            event.getChannel().sendMessage("Hello, " + event.getAuthor().getName() + "!").queue();
        }
        if (msg.equalsIgnoreCase("hunt")) {
            event.getChannel().sendMessage("Hunter is 4 foot 4 and 340LBS!").queue();
        }
        if (msg.equalsIgnoreCase("isay")) {
            event.getChannel().sendMessage(event.getAuthor().getName() + " says we all should hit hunter").queue();
        }
        if (msg.equalsIgnoreCase("wecrack")) {
            event.getChannel().sendMessage(event.getAuthor().getName() + " says we all should crack deigo").queue();
        }
        if (msg.equalsIgnoreCase("meme")) {
            event.getChannel().sendMessage("keep cracking hunter").queue();
        }
    }
}
