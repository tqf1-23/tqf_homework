package com.example.demo.com.tqf.api;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/tasks")
public class tasksController {

    static Map<Long, tasks> task = Collections.synchronizedMap(new HashMap<Long,tasks>());

    @GetMapping("/")
    public List<tasks> getUserList() {

        List<tasks> r = new ArrayList<>(task.values());
        return r;
    }

    @PostMapping("/")
    public String postUser(@RequestBody tasks user) {

        task.put(user.getId(), user);
        return "success";
    }

    @GetMapping("/{id}")
    public tasks getUser(@PathVariable Long id) {
        return task.get(id);
    }




    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        task.remove(id);
        return "success";
    }
}
