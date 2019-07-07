package de.psicho.mailreminder.rest;

import static com.google.common.collect.Lists.newArrayList;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import de.psicho.mailreminder.model.Reminder;

@RestController
public class ReminderController {

    @GetMapping(path = "/reminders", produces = APPLICATION_JSON_UTF8_VALUE)
    public List<Reminder> findReminders() {
        var result = new ArrayList<Reminder>();
        var persons = newArrayList("Lydia", "Markus");
        result.add(Reminder.builder().year("2019").week("1").from("01.01.").to("07.01.").persons(persons).build());
        result.add(Reminder.builder().year("2019").week("2").from("08.01.").to("14.01.").build());
        return result;
    }
}
