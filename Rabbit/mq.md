### RabbitMQ

> >  sudo systemctl enable rabbitmq-server         
> >  sudo systemctl disable rabbitmq-server
> 
> > sudo systemctl start rabbitmq-server
> > sudo systemctl stop rabbitmq-server
>
> > sudo systemctl status rabbitmq-server
>
> > http://localhost:15672
>
> > sudo rabbitmqctl change_password guest newpass
>
> > sudo rabbitmqctl add_user admin myStrongPass
> > sudo rabbitmqctl set_user_tags admin administrator
> > sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"

> ### RabbitMQ
> sender -> rabbitmq -> receiver
> 
> -library [ go get github.com/rabbitmq/amqp091-go ] 