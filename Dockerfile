FROM --platform=linux/x86_64 amazonlinux:2.0.20220912.1

RUN yum update -y && \
    yum install -y \
    	which \
	make \
	unzip \
	&& \
    yum clean all && \
    rm -rf /var/cache/yum/*

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
