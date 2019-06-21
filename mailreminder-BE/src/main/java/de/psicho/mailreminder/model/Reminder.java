package de.psicho.mailreminder.model;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Reminder {

    private String year;
    private String week;
    private String from;
    private String to;
    private List<String> persons;
}
